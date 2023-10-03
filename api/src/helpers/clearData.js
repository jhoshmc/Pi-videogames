//* limpiar los tags que trae desciption
// nota: revisar si funciona cuando funcione la api
const clearTahs = (texto) => {
  return texto.replace(/<[^>]*>/g, "");
};

//* limpiar los valores recibidos de la api y mandoar solo los valores que quiero
// allvideogames, namevideogames

const clearInfo = (games) => {
  const gameClear = games.map((game) => {
    return {
      id: game.id,
      name: game.name,
      genres: !game.created
        ? game.genres?.map((genre) => genre.name)
        : game.Genres?.map((genre) => genre.name),
      platforms: !game.created
        ? game.platforms?.map((platform) => platform.platform.name)
        : game.platforms,
      image_background: game.background_image,
      released: game.released,
      rating: game.rating,
    };
  });
  return gameClear;
};
//*limpiar y mandar valores , solo uno
// idvideogames
const clearIdInfo = (data, tipo) => {
  return {
    id: data.id,
    name: data.name,
    description: clearTahs(data.description),
    genres:
      tipo === "api"
        ? data.genres?.map((genre) => genre.name)
        : data.Genres?.map((genre) => genre.name),
    platforms:
      tipo === "api"
        ? data.platforms?.map((platform) => platform.platform.name)
        : data.platforms,
    image_background: data.background_image,
    released: data.released,
    rating: data.rating,
  };
};

module.exports = {
  clearIdInfo,
  clearInfo,
};
