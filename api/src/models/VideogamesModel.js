const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        // allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      background_image: {
        type: DataTypes.STRING,
      },
      released: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      //para filtrar los videogames que vienen de la api
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
