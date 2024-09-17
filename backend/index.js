import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import pg from 'pg';
import drinkRoutes from "./src/routes/drinkRoutes.js";


dotenv.config();
const { Client } = pg

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.use("/drinks", drinkRoutes);

const connectionString = process.env.DATABASE_URL;

const client = new Client({
  connectionString: connectionString
});

client.connect()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
    return client.end();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
  });

app.get('/', (req, res) => {
  res.send('API de Drinks');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
