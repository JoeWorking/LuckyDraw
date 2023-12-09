import { Knex } from "knex";

exports.seed = async function(knex: Knex): Promise<void>  {
  await knex("Users").truncate();
  await knex("MasDepartments").truncate();

  await knex("MasDepartments").insert([
    {
      DepartmentCode:"I.T",
      DepartmentName:"Information Technology"
    },
    {
      DepartmentCode:"INC",
      DepartmentName:"Invesment Accounting"
    }
  ]);

  await knex("Users").insert([
    {
      UserId: "joech",
      UserName: "Joe Chung",
      Password:"joe6292001",
      DepartmentCode: "I.T",
      chance: "1",
      IsAdmin: true,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      UserId: "james",
      UserName: "James Lee",
      Password:"123456",
      DepartmentCode: "I.T",
      chance: "1",
      IsAdmin: true,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      UserId: "joey",
      UserName: "Joey Li",
      Password:"123456",
      DepartmentCode: "INV",
      chance: "1",
      IsAdmin: true,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);

  // 插入其他表的种子数据
  // ...

  console.log("种子数据加载完成");
};


