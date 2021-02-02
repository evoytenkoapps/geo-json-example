import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./di-types";
import { PinoLogger } from "../service/logger/pino-logger";
import { ILogger } from "../service/logger/logger.interface";
import { IFileReaderService } from "../service/file-reader/file-reader.interfaces";
import { FileReader } from "../service/file-reader/file-reader";
import { Server } from "../server";

export const diContainer = new Container();

diContainer.bind<ILogger>(TYPES.Logger).to(PinoLogger).inSingletonScope();
diContainer
  .bind<IFileReaderService>(TYPES.FileReader)
  .to(FileReader)
  .inSingletonScope();

diContainer.bind(TYPES.Server).to(Server).inSingletonScope();
