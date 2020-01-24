
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('amounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('amounts').insert([
        {amountsId: 1, amountNumber: 0.25},
        {amountsId: 2, amountNumber: 0.5},
        {amountsId: 3, amountNumber: 1}
      ]);
    });
};
