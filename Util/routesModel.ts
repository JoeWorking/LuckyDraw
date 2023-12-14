import { Application } from "express";
import { UsersController } from "../controller/usersController";



export interface CreateRoutesOptions {
  app: Application;
  usersController: UsersController;
}

export interface User {
  id: number;
  username: string;
  password: string;
}
