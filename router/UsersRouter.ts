import express from "express";
import { UsersController } from "../Controller/usersController";
import { knex } from "../Util/knex";

export function createUserRoutes(userController: UsersController) {
  const userRouter = express.Router();

  userRouter.get("/getAllUsers", userController.getAllUsers);

  return userRouter;
}
