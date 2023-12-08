import Knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexConfigs = require("../knexfile");
const configMode = "development";
const knexConfig = knexConfigs[configMode];
export const knex = Knex(knexConfig);
