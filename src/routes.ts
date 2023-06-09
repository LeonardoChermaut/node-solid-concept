import { Router } from "express";
import { createUserController } from "./use-case/create-user";

const router = Router()

router.post('/api/v1/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { router }