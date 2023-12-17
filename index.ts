import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import { UsersModel } from "./model/usersModel";

import { CreateRoutesOptions } from "./util/routesModel";
import { createRouter } from "./router/router";
import { UsersController } from "./controller/usersController";

dotenv.config();

const app: Express = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT;
const knex = require("./util/knex");

let usersService = new UsersModel(knex);
let usersController = new UsersController(usersService);
let createRoutesOptions: CreateRoutesOptions = {
  app,
  usersController,
};

createRouter(createRoutesOptions);

app.use(cookieParser());
app.use(session({
  secret: 'ce_lucky_draw',
  resave: false,
  saveUninitialized: true,
}));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
