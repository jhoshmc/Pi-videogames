const { createVideogameDB } = require("../controllers/videogamesController");
module.exports = async (req, res) => {
  try {
    const {
      name,
      description,
      platforms,
      image_background,
      released,
      rating,
      idGenre,
    } = req.body;
    const game = await createVideogameDB(
      name,
      description,
      platforms,
      image_background,
      released,
      rating,
      idGenre
    );
    res.status(200).json(game);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
