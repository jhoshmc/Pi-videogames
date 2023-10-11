const { createVideogameDB } = require("../controllers/videogamesController");
module.exports = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      idGenre,
    } = req.body;

    const game = await createVideogameDB(
      name,
      description,
      platforms.split(","),
      background_image,
      released,
      rating,
      idGenre
    );
    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
