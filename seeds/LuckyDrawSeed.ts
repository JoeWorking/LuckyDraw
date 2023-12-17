import { Knex } from "knex";

exports.seed = async function(knex: Knex): Promise<void>  {
  await knex("vote_answers").truncate();
  await knex("vote_compare_contestants").truncate();
  await knex("vote_events").truncate();
  await knex("contestants").truncate();
  await knex("users").truncate();
  await knex("mas_departments").truncate();

  await knex("mas_departments").insert([
    {
      department_code:"I.T",
      department_name:"Information Technology"
    },
    {
      department_code:"INC",
      department_name:"Invesment Accounting"
    }
  ]);

  await knex("users").insert([
    {
      user_id: "joech",
      user_name: "Joe Chung",
      password:"joe6292001",
      department_code: "I.T",
      chance: "1",
      is_admin: true,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: "james",
      user_name: "James Lee",
      password:"123456",
      department_code: "I.T",
      chance: "1",
      is_admin: false,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: "joey",
      user_name: "Joey Li",
      password:"123456",
      department_code: "INV",
      chance: "1",
      is_admin: true,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ]);

  await knex("contestants").insert([
    {
      contestant_id: 1,
      user_id: 1,
      song:"隱形遊樂場",
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      contestant_id: 2,
      user_id: 2,
      song:"俏朗君",
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ])

  await knex("vote_events").insert([
    {
      vote_event_id: 1,
      contestant_id: 1,
      start_time:new Date(),
      comparative:true,
      end_time:new Date(),
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vote_event_id: 2,
      contestant_id: 2,
      start_time:new Date(),
      comparative:false,
      end_time:new Date(),
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ])

  await knex("vote_compare_contestants").insert([
    {
      vote_event_id: 1,
      contestants_id: 1,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vote_event_id: 1,
      contestants_id: 2,
      created_by: "system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ])

  await knex("vote_answers").insert([
    {
      vote_answers_id: 1,
      vote_event_id: 1,
      contestants_id: 1,
      user_id :1,
      marks:null,
      created_by:"system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      vote_answers_id: 2,
      vote_event_id: 2,
      contestants_id: 2,
      user_id :1,
      marks:5,
      created_by:"system",
      mod_by: "system",
      created_at: new Date(),
      updated_at: new Date()
    },
  ])


  

  // 插入其他表的种子数据
  // ...

  console.log("种子数据加载完成");
};


