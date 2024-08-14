import { getAllDrinks, getDrinkById } from "../models/drinkModel.js";

export const fetchAllDrinks = async (req, res) => {
  try {
    const drinks = await getAllDrinks();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ error: error.message });
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