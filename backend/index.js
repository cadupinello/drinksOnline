import express from "express";
import knex from "./src/db/knex.js";
import drinkRoutes from "./src/routes/drinkRoutes.js";

const app = express();

app.use(express.json());
app.use("/drinks", drinkRoutes);

// Testar a conexão com o banco de dados
knex.raw('select 1+1 as result').then(() => {
  console.log('Conectado com sucesso')
}).catch((err) => {
  console.log('Erro ao conectar')
  console.log(err)
})

app.get('/', (req, res) => {
  res.send('API de Drinks')
})

const PORT = 3001

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))