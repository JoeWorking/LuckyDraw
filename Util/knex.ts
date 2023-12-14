import Knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10, // 将 max 值增加到 10
  },
});

module.exports = knex;
