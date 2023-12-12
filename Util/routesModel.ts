import { Application } from "express";
import { UsersController } from "../Controller/UsersController";

export interface CreateRoutesOptions {
  app: Application;
  usersController: UsersController;
}

export interface User {
  id: number;
  username: string;
  password: string;
}
