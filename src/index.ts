import { diContainer } from "./di/inversify.config";
import { ILogger } from "./service/logger/logger.interface";
import { TYPES } from "./di/di-types";
import { Server } from "./server";

const logger = diContainer.get<ILogger>(TYPES.Logger);

const server = diContainer.get<Server>(TYPES.Server);
server.getData();

process.on("unhandledRejection", (reason: string, p: Promise<any>) => {
  logger.error("unhandledRejection", reason);
  throw reason;
});

process.on("uncaughtException", (error: Error) => {
  logger.error("uncaughtException", error);
  process.exit(1);
});

logger.log("Server started");
