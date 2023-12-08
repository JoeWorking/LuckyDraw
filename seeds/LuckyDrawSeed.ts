import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("Users").del();
  await knex("MasDepartment").del();

  // Inserts seed entries
  await knex("Users").insert([
    {
      UserID: "joech",
      UserName: "",
      DepartmentCode: "",
      chance: "",
      IsAdmin: true,
      created_by: "",
      mod_by: "",
      created_at: "",
      updated_at: "",
    },
    { id: 2, colName: "rowValue2" },
    { id: 3, colName: "rowValue3" },
  ]);
}
