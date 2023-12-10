import { Request, Response } from "express";
import fetch from "node-fetch";
import { usersModel } from "../Model/usersModel";

export class UsersController {
  constructor(private usersModel: usersModel) {}

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const allUsers = await this.usersModel.getAllUsers();
      res.json(allUsers);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching users." });
    }
  };
}
