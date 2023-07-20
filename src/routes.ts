import { Router } from "express";
import { createUserController } from "./use-case/create-user";

export class UserRoutes {
  private router: Router;
  private path = "/api/v1/users";
  private createUserController = createUserController;

  constructor(router: Router) {
    this.router = router;
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.post(this.path, (request, response) => {
      return this.createUserController.handle(request, response);
    });

    this.router.get(this.path, (request, response) => {
      return this.createUserController.handle(request, response);
    });

    this.router.put(this.path, (request, response) => {
      return this.createUserController.handle(request, response);
    });

    this.router.delete(this.path, (request, response) => {
      return this.createUserController.handle(request, response);
    });
  }
}
