import { uuid } from "uuidv4";

export class User {
    protected readonly id: string;
    protected name: string;
    protected email: string;
    protected password: string;
    
    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuid();
        }
    }
    
}