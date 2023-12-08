import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable("Users");
  if (!hasTable) {
    await knex.schema.createTable("Users", (table) => {
      table.string("UserId").primary().unique();
      table.string("UserName");
      table.integer("DepartmentCode").unsigned();
      table.foreign("DepartmentCode").references("MasDepartments");
      table.integer("chance");
      table.boolean("IsAdmin");
      table.string("created_by");
      table.string("mod_by");
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("Users");
}
