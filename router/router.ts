  import { CreateRoutesOptions } from "../util/routesModel";
import { createUserRoutes } from "./usersRouter";

  // import express from "express";

  export function createRouter(createRoutesOptions: CreateRoutesOptions) {
    const { app, usersController } = createRoutesOptions;

    app.use("/api", createUserRoutes(usersController));
  }
