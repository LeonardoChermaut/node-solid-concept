import { User } from "../../entity";
import { IUserRepository } from "../../repository";

export class PostgresUserRepository implements IUserRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.getEmail === email);
        return user;
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}