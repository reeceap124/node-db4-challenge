
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments('recipesId');
      tbl.string('recipeName')
        .unique()
        .notNullable();
      tbl.text('description');
  })

  .createTable('ingredients', tbl => {
      tbl.increments('ingredientsId');
      tbl.string('ingredientName')
        .unique()
        .notNullable();
  })

  .createTable('amounts', tbl => {
      tbl.increments('amountsId');
      tbl.float('amountNumber')
        .unique()
        .notNullable();
  })

  .createTable('units', tbl => {
      tbl.increments('unitsId');
      tbl.string('unitName')
        .unique()
        .notNullable();
  })

  .createTable('actions',tbl =>{
      tbl.increments('actionsId');
      tbl.string('actionName')
        .unique()
        .notNullable();
  })

  .createTable('ingredients_amounts', tbl => {
      tbl.increments('ingredients_amountsId');

      tbl.integer('ingredient')
        .unsigned()
        .notNullable()
        .references('ingredientsId').inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.integer('amount')
        .unsigned()
        .notNullable()
        .references('amountsId').inTable('amounts')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.integer('unit')
        .unsigned()
        .references('unitsId').inTable('units')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })

  .createTable('recipes_ingredients', tbl=>{
      tbl.increments('recipes_ingredientsId');

      tbl.integer('recipe')
        .unsigned()
        .notNullable()
        .references('recipesId').inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.integer('ingredient')
        .unsigned()
        .notNullable()
        .references('ingredients_amountsId').inTable('ingredients_amounts')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })

  .createTable('recipes_instructions', tbl => {
      tbl.increments('instructionsId');

      tbl.integer('recipe')
        .unsigned()
        .references('recipesId').inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.integer('stepNumber')
        .notNullable();

      tbl.integer('action')
        .unsigned()
        .notNullable()
        .references('actionsId').inTable('actions')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl.integer('ingredient')
        .unsigned()
        .references('recipes_ingredientsId').inTable('recipes_ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes_instructions')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients_amounts')
    .dropTableIfExists('actions')
    .dropTableIfExists('units')
    .dropTableIfExists('amounts')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
