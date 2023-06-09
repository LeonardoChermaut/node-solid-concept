import { Request , Response} from "express";
import { CreateUserUseCase } from "./create.user.usercase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            });
            
            return response.status(201).send();
        } catch (error) {
            return response.status(404).json({
                message: error.message || "Unexpected error."
            });
        }
        
    }
}