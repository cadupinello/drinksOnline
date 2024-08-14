import express from 'express';
import { fetchAllDrinks, fetchDrinkById } from '../controllers/drinkController.js';

const router = express.Router();

router.get('/', fetchAllDrinks);
router.get('/:id', fetchDrinkById);

export default router