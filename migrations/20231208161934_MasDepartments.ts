import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable("MasDepartments");
  if (!hasTable) {
    await knex.schema.createTable("MasDepartments", (table) => {
      table.string("DepartmentCode").primary().unique(); // 创建唯一的字符串主键列 'id'
      table.string("DepartmentName").notNullable;
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("MasDepartments");
}
