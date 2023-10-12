//* los handlers NUNCA  interactuan con fuentes externas de info
//funciones:
// recibir la request
// unificar datos
// devolver la respuesta
// invocar al controller
const {
  getApiGames,
  getDBGames,
} = require("../controllers/videogamesController");
let gamesApi = [];

module.exports = async (req, res) => {
  try {
    console.log(gamesApi.length);
    if (gamesApi.length === 0) {
      gamesApi = await getApiGames();
    }
    const gamesDB = await getDBGames();
    const allVideogames = [...gamesDB, ...gamesApi];
    res.status(200).json(allVideogames);
    console.log(gamesApi.length);
  } catch (error) {
    res.status(400).json({ error: error.message + " videogmae" });
  }
};
