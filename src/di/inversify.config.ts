import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./di-types";
import { PinoLogger } from "../service/logger/pino-logger";
import { ILogger } from "../service/logger/logger.interface";

export const diContainer = new Container();

diContainer.bind<ILogger>(TYPES.Logger).to(PinoLogger).inSingletonScope();
