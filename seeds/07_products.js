
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Celular Samsung', description: 'Celular Samsung', category_id: 1},
        {id: 2, title: 'IPhone 12', description: 'Celular IPhone', category_id: 2},
        {id: 3, title: 'Capa de Iphone', description: 'Capa de super heroi', category_id: 3},
      ]);
    });
};
