import { Knex } from "knex";

interface User {
  UserId: string;
  UserName: string;
  Password: string;
  DepartmentCode: string;
  Chance: number;
  IsAdmin: boolean;
  created_by: string;
  mod_by: string;
  created_at: Date;
  updated_at: Date;
}

export class UsersModel {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }
  async getAllUsers(): Promise<User[]> {
    try {
    
      const users = await this.knex.select("*").from("Users");
      return users;
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      throw error;
    } finally {
      // Don't forget to destroy the Knex connection
      this.knex.destroy();
    }
  }
  async loginChecking(userId: string): Promise<User[]> {
    try {
      const users = await this.knex("Users")
        .select("*")
        .where("userId", userId);

      return users;
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      throw error;
    } finally {
      // Don't forget to destroy the Knex connection
      this.knex.destroy();
    }
  }
}
