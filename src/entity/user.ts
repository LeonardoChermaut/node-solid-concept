import { uuid } from "uuidv4";
import { CreateUserRequestDTO } from "../use-case/create-user/create.dto";

export class User {
  protected readonly id: string;
  protected name: string;
  protected email: string;
  protected password: string;

  constructor(props: CreateUserRequestDTO, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }

   getEmail(): string {
    return this.email;
  }
}
