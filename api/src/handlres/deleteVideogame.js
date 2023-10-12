const { deleteGame } = require("../controllers/videogamesController");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteGame(id);
    // console.log(response)
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
