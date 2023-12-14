import express from "express";
import { UsersController } from "../controller/usersController";


export function createUserRoutes(userController: UsersController) {
  const userRouter = express.Router();

  userRouter.get("/getAllUsers", userController.getAllUsers);

  return userRouter;
}
