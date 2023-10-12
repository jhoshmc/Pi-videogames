const { Router } = require("express");

const videogamesHandler = require("../handlres/videogamesHandler");
const videogamesIdHandler = require("../handlres/videogamesIdHandler");
const videogamesNameHandler = require("../handlres/videogamesNameHandler");
const postVideogamesHandler = require("../handlres/postVideogamesHandler");
const deleteVideogame = require("../handlres/deleteVideogame");
const gameRouter = Router();

gameRouter.get("/", videogamesHandler);

// traer por name:

gameRouter.get("/name", videogamesNameHandler);
// traer por id:

gameRouter.get("/:id", videogamesIdHandler);

// post game:

gameRouter.post("/", postVideogamesHandler);

//delete game:
gameRouter.delete("/:id", deleteVideogame);

module.exports = gameRouter;
