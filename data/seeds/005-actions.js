
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {actionsId: 1, actionName: 'add'},
        {actionsId: 2, actionName: 'pour'},
        {actionsId: 3, actionName: 'spread'}
      ]);
    });
};
