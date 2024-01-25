const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getGernres = require("../handlres/genresHandler");
const videogamesHandler = require("../handlres/videogamesHandler");
const videogamesIdHandler = require("../handlres/videogamesIdHandler");
const videogamesNameHandler = require("../handlres/videogamesNameHandler");
const postVideogamesHandler = require("../handlres/postVideogamesHandler");
const deleteVideogame = require("../handlres/deleteVideogame");

// const gameRouter = require("./gameRouter");
//const postRouter = require("./postRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use("/videogames", gameRouter);
//router.use("/videogames", postRouter);
router.get("/game", videogamesHandler);

// traer por name:

router.get("/game/name", videogamesNameHandler);
// traer por id:

router.get("/game/:id", videogamesIdHandler);

// post game:

router.post("/game", postVideogamesHandler);

//delete game:
router.delete("/game/:id", deleteVideogame);
router.get("/genres", getGernres);

module.exports = router;
