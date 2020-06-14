
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, description: 'Celulares'},
        {id: 2, description: 'Acessórios'},
        {id: 3, description: 'Computadores'},
      ]);
    });
};
