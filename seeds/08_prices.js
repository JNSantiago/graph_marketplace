
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('prices').del()
      .then(function () {
        // Inserts seed entries
        return knex('prices').insert([
          {id: 1, value: 1234.23, product_id: 1},
          {id: 2, value: 5678.12, product_id: 2},
          {id: 3, value: 12, product_id: 3},
        ]);
      });
  };