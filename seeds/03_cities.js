
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {id: 1, name: 'Teresina', country_id: 1},
        {id: 2, name: 'Boa Vista', country_id: 2},
        {id: 3, name: 'Jaguaquara', country_id: 3}
      ]);
    });
};
