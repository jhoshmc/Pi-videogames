const { getNameVideogame } = require("../controllers/videogamesController");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;

    const game = await getNameVideogame(name);
    res.status(200).json(game); //json(resu);
    console.log(name);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
