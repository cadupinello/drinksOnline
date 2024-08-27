import dbConn from "../db/knex.js";
import { DrinkModel } from "../models/drinkModel.js";

export class DrinkService {
  static async fetchDrinks(query) {
    return await DrinkModel.getDrinks(query);
  }

  static async getTotalDrinks() {
    return dbConn('drinks').count('* as count').first();
  }
}
