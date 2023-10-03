require("dotenv").config();
const { API_KEY } = process.env;
const url = "https://api.rawg.io/api/games";
const axios = require("axios");
const { Sequelize } = require("sequelize");
const { clearInfo, clearIdInfo } = require("../helpers/clearData");
const { Videogame, Genre } = require("../db");

//*---------
const getAllvideogames = async () => {
  const responseApi = (await axios(`${url}?key=${API_KEY}&limimit=15`)).data
    .results;
  const responseDB = await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
    },
  });
  const gameDb = clearInfo(responseDB);
  const gamesApi = clearInfo(responseApi);

  return [...gameDb, ...gamesApi];
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
  image_background,
  released,
  rating,
  idGenre
) => {
  if (!idGenre.length) {
    throw new Error("no hay generos en la base de datos ");
  }
  const genre = await Genre.findAll({
    where: {
      name: idGenre,
    },
  });

  const [row, created] = await Videogame.findOrCreate({
    where: { name, description, platforms, image_background, released, rating },
  });

  if (created === false) {
    throw new Error(
      "un juego con las mismas caracteriticas ya a sido ingresado "
    );
  }
  await row.addGenre(genre);

  return row;
};

module.exports = {
  getAllvideogames,
  idVideogame,
  getNameVideogame,
  createVideogameDB,
};
