import { User } from "../entity";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<void>;
}