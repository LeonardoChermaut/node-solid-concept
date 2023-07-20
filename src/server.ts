import { App } from "./app";
import { EnvConfig } from "./helpers/env";

export class Server {
    private env: EnvConfig = EnvConfig.getInstance();

    async start(): Promise<void> {
        const app = new App().init();
        const port = this.env.get("APP_PORT");

        app.listen(port, (): void => console.log(`Server is running on port ${port}.`));
    }
}

const server = new Server();
server.start();
