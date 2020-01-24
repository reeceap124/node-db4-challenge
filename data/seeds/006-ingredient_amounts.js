
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients_amounts').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_amounts').insert([
        {ingredients_amountsId: 1, ingredient: 1, amount: 3, unit:3},
        {ingredients_amountsId: 2, ingredient: 2, amount: 3, unit:3},
        {ingredients_amountsId: 3, ingredient: 3, amount: 3},
        {ingredients_amountsId: 4, ingredient: 4, amount: 3, unit:2}
      ]);
    });
};
