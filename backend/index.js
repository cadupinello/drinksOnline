import cors from "cors";
import express from "express";
import knex from "./src/db/knex.js";
import drinkRoutes from "./src/routes/drinkRoutes.js";

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/drinks", drinkRoutes);

knex.raw('select 1+1 as result').then(() => {
  console.log('Conectado com sucesso');
}).catch((err) => {
  console.log('Erro ao conectar');
  console.log(err);
});

app.get('/', (req, res) => {
  res.send('API de Drinks');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
