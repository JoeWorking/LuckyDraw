import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("vote_events");
  if (!hasTable) {
    await knex.schema.createTable("vote_events", (table) => {
      table.increments("vote_event_id").primary();
      table.integer("contestant_id").unsigned();
      table.foreign("contestant_id").references("contestants");
      table.boolean("comparative").notNullable
      table.dateTime("start_time");
      table.dateTime("end_time");
      table.string("created_by");
      table.string("mod_by");
      table.timestamps(true, true);
    });
  }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("vote_events");
}

