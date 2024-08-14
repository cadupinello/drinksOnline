/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('drinks', table => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.boolean('isActive').defaultTo(true);
    table.uuid('category_id')
      .nullable()
      .references('id')
      .inTable('categories')
      .onDelete('SET NULL');
    table.uuid('prices_id')
      .nullable()
      .references('id')
      .inTable('prices')
      .onDelete('SET NULL');
    table.uuid('photos_id')
      .nullable()
      .references('id')
      .inTable('photos')
      .onDelete('SET NULL');
    table.boolean('availableDays_sunday').defaultTo(false);
    table.boolean('availableDays_monday').defaultTo(false);
    table.boolean('availableDays_tuesday').defaultTo(false);
    table.boolean('availableDays_wednesday').defaultTo(false);
    table.boolean('availableDays_thursday').defaultTo(false);
    table.boolean('availableDays_friday').defaultTo(false);
    table.boolean('availableDays_saturday').defaultTo(false);
  });
}
