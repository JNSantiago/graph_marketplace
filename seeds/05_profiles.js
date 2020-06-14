
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, name: 'João Neto', cpf: '025.365.963-23', user_id: 1},
        {id: 2, name: 'Admin', cpf: '025.365.963-23', user_id: 2},
        {id: 3, name: 'Fulano', cpf: '025.365.963-23', user_id: 3},
      ]);
    });
};
