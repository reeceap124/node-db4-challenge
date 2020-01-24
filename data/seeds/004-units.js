
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {unitsId: 1, unitName: 'tsp'},
        {unitsId: 2, unitName: 'tbls'},
        {unitsId: 3, unitName: 'cup'}
      ]);
    });
};
