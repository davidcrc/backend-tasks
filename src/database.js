/**
 * este archivo es para manejar datos con la BD
 * contendra las funciones quue seran llamadas en el index
 */

// Un objeto para la conexion psql
const { Pool } = require("pg");
const { config } = require("./config");

const connect = new Pool(config);

export default connect;
