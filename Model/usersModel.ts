import { Knex } from "knex";

interface user {
  user_id: string;
  user_name: string;
  password: string;
  department_code: string;
  chance: number;
  is_admin: boolean;
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
  async getAllUsers(): Promise<user[]> {
    try {

      const users = await this.knex("users as u")
        .select("u.user_id", "u.user_name", "u.password", "md.department_name", "u.chance")
        .leftJoin("mas_departments as md", "u.department_code", "md.department_code");
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
  
  async loginChecking(user_id: string): Promise<user[]> {
    try {
      const users = await this.knex("users")
        .select("*")
        .where("user_id", user_id);

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
