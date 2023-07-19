import express from 'express'
import { router } from './routes'

export class App {
    private app: express.Application;
    
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(router);
    }
    
    public getApp(): express.Application {
        return this.app;
    }
}

new App().getApp();



