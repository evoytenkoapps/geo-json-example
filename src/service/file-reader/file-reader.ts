import { IFileReaderService } from "./file-reader.interfaces";
import { inject, injectable } from "inversify";
import * as path from "path";
import * as fs from "fs";
import { TYPES } from "../../di/di-types";
import { ILogger } from "../logger/logger.interface";

@injectable()
export class FileReader implements IFileReaderService {
  constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}
  public read(pathToFile: string) {
    this.logger.log("Read file", pathToFile);
    return fs.readFileSync(path.resolve(pathToFile), "utf8");
  }
}
