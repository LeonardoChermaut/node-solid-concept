import { User } from "../../entity";
import { IMailProvider } from "../../provider";
import { IUserRepository } from "../../repository";
import { CreateUserRequestDTO } from "./create.dto";

export class CreateUserUseCase {
    constructor(private repository: IUserRepository,
        private mailProvider: IMailProvider) {
        this.repository = repository;
    }
    async execute(data: CreateUserRequestDTO) {
        const userAlreadyExists = await this.repository.findByEmail(data.email);
        if (userAlreadyExists) throw new Error("User already exists.");

        const user = new User(data);
        await this.repository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "APP Team",
                email: "app@team.com"
            },
            subject: "Seja bem-vindo à plataforma",
            body: "<p>Você já pode fazer login em nossa plataforma.</p>"
        });
    }
}