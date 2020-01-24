
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_instructions').insert([
        {instructionsId: 1, recipe: 1, stepNumber: 1, action: 2, ingredient:1},
        {instructionsId: 2, recipe: 1, stepNumber: 2, action: 2, ingredient:2}
      ]);
    });
};
