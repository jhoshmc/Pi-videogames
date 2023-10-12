export const validation = (data) => {
  const errors = {};
  const noSimbolos = /^[a-zA-Z0-9\s]*$/;
  const noEspacios = /^[^,\s]+(?:,[^,\s]+)*$/;
  const imagen = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/;

  if (!data.name) {
    errors.name = "El nombre no puede estar vacio";
  }
  if (!noSimbolos.test(data.name)) {
    errors.name = "El nombre del juego no puede tener simbolos";
  }

  if (!data.background_image) {
    errors.background_image = "La url no puede estar vacia";
  }
  if (!imagen.test(data.background_image)) {
    errors.background_image = "La url de la imagen no puede ser procesada";
  }
  if (!data.description) {
    errors.description = "por favor, ingrese una breve descripcion";
  }
  if (data.description.length > 100) {
    errors.description = "no puede pasar mas de 100 caracteres";
  }
  if (!data.platforms) {
    errors.platforms = "Al menos deve tener una plataforma";
  }
  if (!noEspacios.test(data.platforms)) {
    errors.platforms =
      "Las plataformas solo se pueden separa por comas y sin espacios";
  }

  if (!data.rating) {
    errors.rating = "no puede estar vacio";
  }
  if (data.rating < 0 || data.rating > 5) {
    errors.rating = "el rating no puede ser menor a 0 o mayor a 5";
  }

  if (data.idGenre.length === 0) {
    errors.idGenre = "Al menos deve tener un genero";
  }

  return errors;
};
