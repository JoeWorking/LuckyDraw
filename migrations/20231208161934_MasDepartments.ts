import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasTable = await knex.schema.hasTable("mas_departments");
  if (!hasTable) {
    await knex.schema.createTable("mas_departments", (table) => {
      table.string("department_code").primary().unique(); // 创建唯一的字符串主键列 'id'
      table.string("department_name").notNullable;
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("mas_departments");
}
