import { getDrinkById } from "../models/drinkModel.js";
import { DrinkService } from "../services/drinkService.js";

export const fetchAllDrinks = async (req, res) => {
  try {
    const { category, page, limit } = req.query;

    const drinks = await DrinkService.fetchDrinks({
      category,
      page,
      limit
    });
    const totalDrinks = await DrinkService.getTotalDrinks();
    const totalPages = Math.ceil(totalDrinks.count / limit);

    res.json({
      data: drinks,
      pagination: {
        currentPage: parseInt(page) || 1,
        totalPages,
        totalItems: totalDrinks.count,
        itemsPerPage: parseInt(limit) || 10
      },
    });

  } catch (error) {
    res.status(500).json({ 
      message: 'Erro ao buscar drinks',
      error
     });
  }
};

export const fetchDrinkById = async (req, res) => {
  try {
    const { id } = req.params;
    const drink = await getDrinkById(id);
    if (!drink) return res.status(404).json({ error: "Drink não encontrado" });
    res.status(200).json(drink);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}