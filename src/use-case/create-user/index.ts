import { MailTrapMailProvider, PostgresUserRepository } from "../../provider/implementations";
import { CreateUserController } from "./create.user.controller";
import { CreateUserUseCase } from "./create.user.usercase";

const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();
const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }
