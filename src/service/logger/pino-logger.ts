import {injectable} from "inversify";
import moment from "moment";
import pino from "pino";
import {ILogger} from "./logger.interface";

const logger = pino({
  timestamp: () =>
    `,"time":"${moment(new Date()).format("DD.MM.YY HH:mm:ss.SSS")}"`,
  base: null,
  prettyPrint: { colorize: true },
});

@injectable()
export class PinoLogger implements ILogger {
  public error(error: Error, ...args): void {
    logger.error({ err: error }, JSON.stringify(this.getBaseLog(args)));
  }

  public log(...args): void {
    logger.info(this.getBaseLog(args));
  }

  public warn(...args): void {
    logger.warn(this.getBaseLog(args));
  }

  public debug(...args): void {
    logger.info(this.getBaseLog(args));
  }

  private getBaseLog(args): string {
    return args.join(" ");
  }
}
