
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipesId: 1, recipeName: 'Cereal'},
        {recipesId: 2, recipeName: 'Peanut Butter Sandwich'}
      ]);
    });
};
