const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'cadu',
      password: 'cadu4030',
      database: 'drinks_bd',
      port: 5432
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