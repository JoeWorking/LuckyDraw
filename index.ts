import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import { usersModel } from "./Model/usersModel";

import { CreateRoutesOptions } from "./Util/routesModel";
import { createRouter } from "./Router/router";
import { UsersController } from "./Controller/usersController";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const knex = require("./Util/knex");

let usersService = new usersModel(knex);
let usersController = new UsersController(usersService);
let createRoutesOptions: CreateRoutesOptions = {
  app,
  usersController,
};

createRouter(createRoutesOptions);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
