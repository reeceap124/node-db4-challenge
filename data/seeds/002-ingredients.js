
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredientsId: 1, ingredientName: 'cereal'},
        {ingredientsId: 2, ingredientName: 'milk'},
        {ingredientsId: 3, ingredientName: 'bread'},
        {ingredientsId: 4, ingredientName: 'peanut butter'}
      ]);
    });
};
