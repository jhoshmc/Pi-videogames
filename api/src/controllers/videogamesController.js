require("dotenv").config();
const { API_KEY } = process.env;
const url = "https://api.rawg.io/api/games";
const axios = require("axios");
const { Sequelize } = require("sequelize");
const { clearInfo, clearIdInfo } = require("../helpers/clearData");
const { Videogame, Genre } = require("../db");

//*---------
const getApiGames = async () => {
  let arrGames = [];
  for (let i = 1; i <= 5; i++) {
    const responseApi = (await axios(`${url}?key=${API_KEY}&page=${i}`)).data
      .results;
    const gamesApi = clearInfo(responseApi);
    // arrGames.push(gamesApi);
    arrGames = [...arrGames, gamesApi];
  }
  const arrayPlano = arrGames.reduce(
    (acumulador, elemento) => acumulador.concat(elemento),
    []
  );
  return arrayPlano;

  // return arrayPlano;
};
//*-------
const getDBGames = async () => {
  const responseDB = await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
    },
  });
  const gameDb = clearInfo(responseDB);
  return gameDb;
};

//*--------

const idVideogame = async (id, tipo) => {
  // return isNaN(id)
  //   ? "no soy un numero, voy a la db"
  //   : "soy un numero, voy a la api";
  const response =
    tipo === "api"
      ? await axios(`${url}/${id}?key=${API_KEY}`)
      : await Videogame.findByPk(id, {
          include: {
            model: Genre,
            atributes: ["name"],
          },
        });
  if (!response) {
    throw new Error("videogame not found");
  }

  const data = tipo === "api" ? response.data : response; //.toJSON();
  const gameData = clearIdInfo(data, tipo);

  return gameData;
};
//*------

const getNameVideogame = async (name) => {
  const resultsDB = await Videogame.findAll({
    where: {
      name: {
        [Sequelize.Op.iLike]: `%${name}%`,
      },
    },
    limit: 15,
  });

  const response = (
    await axios(`${url}?search=${name}&key=${API_KEY}&limit=15`)
  ).data.results;
  if ([...resultsDB, ...response].length === 0) {
    throw new Error(`no se encontro el juego por el  nombre : ${name}`);
  }
  const gamesApi = clearInfo(response);
  const gamesDB = clearInfo(resultsDB);

  return [...gamesDB, ...gamesApi].slice(0, 15);
};
//*----------

const createVideogameDB = async (
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  idGenre
) => {
  if (!idGenre.length) {
    throw new Error("no hay generos en la base de datos ");
  }
  //name.toLowerCase().replace(/ /g, "");
  const created = await Videogame.findOne({
    where: { name: name.toLowerCase().trim() },
  });
  if (created) {
    //null
    throw new Error("juego ya ingresado con el mismo nombre");
  }
  const genre = await Genre.findAll({
    where: {
      name: idGenre,
    },
  });
  const row = await Videogame.create({
    name: name.toLowerCase().trim(),
    description,
    platforms,
    background_image,
    released,
    rating,
  });

  await row.addGenre(genre);

  return row;
};
const deleteGame = async (id) => {
  const find = await Videogame.findByPk(id);
  if (!find) {
    throw new Error("no se puede eliminar un juego que no existe");
  }
  await Videogame.destroy({ where: { id } });
  const allVideoGames = await Videogame.findAll({
    include: [
      {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });
  return allVideoGames;
};

module.exports = {
  getApiGames,
  getDBGames,
  idVideogame,
  getNameVideogame,
  createVideogameDB,
  deleteGame,
};
