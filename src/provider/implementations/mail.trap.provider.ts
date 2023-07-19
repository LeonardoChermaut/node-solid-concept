import { IMailProvider, IMessage } from "../mail.provider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { EnvConfig } from "../../helpers/env";

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;
    private env: EnvConfig = EnvConfig.getInstance();

    constructor() {
        const env = this.env;
        const host = env.get("MAILTRAP_HOST");
        const port = env.get("MAILTRAP_PORT");
        const user = env.get("MAILTRAP_USER");
        const password = env.get("MAILTRAP_PASS");

        this.transporter = nodemailer.createTransport({
            host,
            port,
            auth: {
                user,
                password,
            }
        } as Mail.Options);
    }
    
    async sendMail({ to, from, subject, body }: IMessage): Promise<void> {
        return await this.transporter.sendMail({
            to: {
                name: to.name,
                address: to.email
            },
            from: {
                name: from.name,
                address: from.email
            },
            subject: subject,
            html: body
        });
    }
}