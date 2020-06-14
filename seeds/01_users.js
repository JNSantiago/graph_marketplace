
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'joao.neto.ninja@gmail.com', password: 123456},
        {id: 2, email: 'admin@admin.com', password: 123456},
        {id: 3, email: 'fulano@fulano.com', password: 123456}
      ]);
    });
};
