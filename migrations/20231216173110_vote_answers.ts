import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("vote_answers");
  if (!hasTable) {
    await knex.schema.createTable("vote_answers", (table) => {
      table.increments("vote_answers_id").primary();
      table.integer("vote_event_id").unsigned();
      table.foreign("vote_event_id").references("vote_event").notNullable;
      table.integer("contestant_id").unsigned();
      table.foreign("contestant_id").references("contestants").notNullable;
      table.string("user_id").unsigned();
      table.foreign("user_id").references("users").notNullable;
      table.string("marks");
      table.string("created_by");
      table.string("mod_by");
      table.timestamps(true, true);
    });
}
}


export async function down(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("vote_answers");
}

