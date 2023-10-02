const getGenres = require("../controllers/getGenresController");

module.exports = async (req, res) => {
  try {
    const genres = await getGenres();
    res.status(200).json(genres); //.send("Genero masculino, femenino y 35 tipos de gay");
  } catch (error) {
    res.status(400).send(error);
  }
};
