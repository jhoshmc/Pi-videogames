//* los handlers NUNCA  interactuan con fuentes externas de info
//funciones:
// recibir la request
// unificar datos
// devolver la respuesta
// invocar al controller
const { getAllvideogames } = require("../controllers/videogamesController");

module.exports = async (req, res) => {
  try {
    const games = await getAllvideogames();
    res.status(200).json(games);
    console.log("andamo ready");
  } catch (error) {
    res.status(400).json({ error: error.message + " videogmae" });
  }
};
