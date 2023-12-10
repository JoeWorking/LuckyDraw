import { Application } from "express";
import { UsersController } from "../Controller/usersController";

export interface CreateRoutesOptions {
  app: Application;
  usersController: UsersController;
}
