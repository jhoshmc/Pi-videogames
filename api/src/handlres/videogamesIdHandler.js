const { idVideogame } = require("../controllers/videogamesController");
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = isNaN(id) ? "db" : "api";

    const response = await idVideogame(id, tipo);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message + " id" });
  }
};
