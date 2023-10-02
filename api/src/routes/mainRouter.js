const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getGernres = require("../handlres/genresHandler");
const gameRouter = require("./gameRouter");
//const postRouter = require("./postRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", gameRouter);
//router.use("/videogames", postRouter);
router.get("/genres", getGernres);

module.exports = router;
