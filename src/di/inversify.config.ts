import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./di-types";
import { PinoLogger } from "../service/logger/pino-logger";
import { ILogger } from "../service/logger/logger.interface";
import { IFileReaderService } from "../service/file-reader/file-reader.interfaces";
import { FileReader } from "../service/file-reader/file-reader";
import { Server } from "../server";
import { GeoLoaderService } from "../service/geo-loader/geo-loader";
import { Repository } from "../service/repository/repository";

export const diContainer = new Container();

diContainer.bind<ILogger>(TYPES.Logger).to(PinoLogger).inSingletonScope();
diContainer
  .bind<IFileReaderService>(TYPES.FileReader)
  .to(FileReader)
  .inSingletonScope();

diContainer.bind(TYPES.Server).to(Server).inSingletonScope();

diContainer
  .bind(TYPES.GeoLoaderService)
  .to(GeoLoaderService)
  .inSingletonScope();

diContainer.bind(TYPES.Repository).to(Repository);
