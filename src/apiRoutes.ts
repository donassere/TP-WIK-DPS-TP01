import { RoutesConfig } from "./routes.config";
import express from "express";

let data: Object[] = [];

export class ApiRoutes extends RoutesConfig {
  constructor(app: express.Application) {
    super(app, "ApiRoutes");
  }

  config() {
    this.app
      .route("/ping")
      .get((req: express.Request, res: express.Response) => {
        const os = require('os');
        console.log(os.hostname());
        res.send(`GET Request successful!`);
      });
    return this.app;
  }
}