import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable("contestants");
    if (!hasTable) {
      await knex.schema.createTable("contestants", (table) => {
        table.increments("contestant_id").primary();
        table.string("user_id").unsigned();
        table.foreign("user_id").references("users").notNullable;
        table.string("song").notNullable;
        table.string("created_by");
        table.string("mod_by");
        table.timestamps(true, true);
      });
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("contestants");
}

