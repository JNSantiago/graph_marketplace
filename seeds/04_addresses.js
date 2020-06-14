
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {id: 1, neighborhood: 'Mocambinho', street: 'Av. Freitas Neto', number: 12, zip_code: '365269-69', city_id: 1},
        {id: 2, neighborhood: 'Mocambinho', street: 'Av. Freitas Neto', number: 12, zip_code: '365269-69', city_id: 2},
        {id: 3, neighborhood: 'Mocambinho', street: 'Av. Freitas Neto', number: 12, zip_code: '365269-69', city_id: 3}
      ]);
    });
};
