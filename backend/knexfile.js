import dotenv from 'dotenv'

dotenv.config()

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}

export default knexConfig