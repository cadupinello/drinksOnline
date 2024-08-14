/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('photos', table => {
    table.uuid('id').primary();
    table.string('url').notNullable();
  });
}
