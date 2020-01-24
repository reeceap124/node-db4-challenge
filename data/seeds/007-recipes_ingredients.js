
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipes_ingredientsId: 1, recipe: 1, ingredient:1},
        {recipes_ingredientsId: 2, recipe: 1, ingredient:2}
      ]);
    });
};
