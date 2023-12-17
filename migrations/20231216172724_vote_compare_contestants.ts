import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("vote_compare_contestants");
  if (!hasTable) {
    await knex.schema.createTable("vote_compare_contestants", (table) => {
      table.integer("contestant_id").unsigned();
      table.foreign("contestant_id").references("contestants").notNullable;
      table.integer("vote_event_id").unsigned();
      table.foreign("vote_event_id").references("vote_event").notNullable;
      table.string("created_by");
      table.string("mod_by");
      table.timestamps(true, true);
    });
}
}

export async function down(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("vote_compare_contestants");
}

