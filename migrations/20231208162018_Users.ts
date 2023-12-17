import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable("users");
  if (!hasTable) {
    await knex.schema.createTable("users", (table) => {
      table.string("user_id").primary().unique();
      table.string("user_name").notNullable;
      table.string("password").notNullable;
      table.string("department_code").unsigned();
      table.foreign("departmentCode").references("mas_departments").notNullable;
      table.integer("chance").notNullable;
      table.boolean("is_admin").notNullable;
      table.string("created_by");
      table.string("mod_by");
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}
