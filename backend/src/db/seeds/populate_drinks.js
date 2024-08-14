/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  /*await knex('drinks').insert([
    { id: 'b45a23f8-ffb4-40be-89f9-131df5572168', name: 'Beijo da Amante', description: 'Vinho, Iogurte, Leite Condensado e Vodka', isActive: true, category_id: '42017edb-da22-4b77-8de8-aa03153f5eb0', prices_id: 'e40296e2-965f-440f-a7e2-a0c1265fd113', photos_id: 'ecd0246d-7d89-4f04-899b-af30e6fd2006', availableDays_sunday: true, availableDays_monday: true, availableDays_tuesday: true, availableDays_wednesday: true, availableDays_thursday: true, availableDays_friday: true, availableDays_saturday: true },
    { id: '7c7c3fcc-1287-4d64-8757-a9d8e2673ebc', name: 'Caipirinha', description: 'Limão, Açúcar e Vokda', isActive: true, category_id: '42017edb-da22-4b77-8de8-aa03153f5eb0', prices_id: '35499232-c714-43f2-a4fc-b4c52a16605e', photos_id: 'd63d0689-7bbd-4a25-a725-383d275ff4b3', availableDays_sunday: true, availableDays_monday: true, availableDays_tuesday: true, availableDays_wednesday: true, availableDays_thursday: true, availableDays_friday: true, availableDays_saturday: true },
  ]);*/
}
