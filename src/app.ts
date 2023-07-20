import express from "express";
import { UserRoutes } from "./routes";

export class App {
  private app: express.Application;
  private routes: UserRoutes;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    const routers = express.Router();
    this.routes = new UserRoutes(routers);
    this.app.use(routers);
  }

  public init(): express.Application {
    return this.app;
  }
}

const app = new App();
app.init();
