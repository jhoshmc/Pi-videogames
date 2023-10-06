export const validation = (data) => {
  const errors = {};
  if (data.name.length > 10) {
    errors.name = "El nombre del juego no puede pasar los 10 caracteres";
  }
  /*
  if (data.background_image.length < 1) {
    errors.name = "La url de la imagen no puede estar vacio";
  }

  if (!data.platforms.length) {
    errors.name = "Las platforms del juego no pueden estar vacias";
  }
  if (!data.description.length > 100) {
    errors.name = "La description no puede superar los 100 caracteres";
  }

  if (!data.relazed.length) {
    errors.name = "El relazed del juego no puede estar vacio";
  }

  if (!data.rating.length) {
    errors.name = "La rating del juego no puede estar vacio";
  }
*/
  return errors;
};
