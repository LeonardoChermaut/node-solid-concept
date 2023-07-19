import dotenv from "dotenv";

export class EnvConfig {
  private static instance: EnvConfig;
  private env: dotenv.DotenvParseOutput;

  private constructor() {
    this.env = dotenv.config().parsed;
  }

  public static getInstance(): EnvConfig {
    if (!EnvConfig.instance) {
      EnvConfig.instance = new EnvConfig();
    }
    return EnvConfig.instance;
  }

  public get(variable: string): string {
    if (this.env[variable] === undefined) {
      throw new Error(`Env variable ${variable} is not defined`);
    }
    return this.env[variable] as string;
  }
}
