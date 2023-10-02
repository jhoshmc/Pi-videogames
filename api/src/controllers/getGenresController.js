require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");
const url = "https://api.rawg.io/api/genres";

const getGenres = async () => {
  const { data } = await axios(`${url}?key=${API_KEY}`);
  const genresApi = data.results.map((genre) => {
    return {
      name: genre.name,
    };
  });

  const genresDb = await Genre.bulkCreate(genresApi);

  return genresDb;
};

module.exports = getGenres;
