/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('prices', table => {
    table.uuid('id').primary();
    table.decimal('amount', 10, 2).notNullable();
  });
}
