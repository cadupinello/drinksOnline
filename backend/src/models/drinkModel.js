import dbConn from "../db/knex.js";

export class DrinkModel {
  static getDrinks(query) {
    let queryBuilder = dbConn('drinks')
      .select('drinks.*', 'categories.name as category', 'photos.url as photo', 'prices.amount')
      .join('categories', 'drinks.category_id', 'categories.id')
      .join('photos', 'drinks.photos_id', 'photos.id')
      .join('prices', 'drinks.prices_id', 'prices.id')

      if(query.category) {
        Object.keys(query).forEach(key => {
          queryBuilder = queryBuilder.where('categories.name', query.category)
        });
      }

      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 10;
      const offset = (page - 1) * limit;
      queryBuilder = queryBuilder.limit(limit).offset((page - 1) * limit);

    return queryBuilder;
  }
}

export const getDrinkById = (id) => {
  return dbConn('drinks').select('*').where('id', id).first()
}