import dbConn from "../db/knex.js";

export const getAllDrinks = () => {
  return dbConn('drinks').select('*').orderBy('name')
}

export const getDrinkById = (id) => {
  return dbConn('drinks').select('*').where('id', id).first()
}