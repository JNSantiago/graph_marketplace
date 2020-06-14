
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: 1, uf: 'PI'},
        {id: 2, uf: 'RO'},
        {id: 3, uf: 'BA'}
      ]);
    });
};
