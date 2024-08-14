/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('categories', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
  });
}
