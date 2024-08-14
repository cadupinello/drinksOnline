import knex from "knex";
import knexConfig from "../../knexfile.js";

const dbConn = knex(knexConfig.development);

export default dbConn