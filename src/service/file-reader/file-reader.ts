import { IFileReaderService } from "./file-reader.interfaces";
import { inject, injectable } from "inversify";
import { TYPES } from "../../di/di-types";
import { ILogger } from "../logger/logger.interface";
import * as fs from "fs";
import * as path from "path";

@injectable()
export class FileReader implements IFileReaderService {
  constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}
  public read(pathToFile: string): string[] {
    this.logger.log("Read file", pathToFile);
    const buffer = fs.readFileSync(path.resolve(pathToFile), "utf8");
    const file = buffer.split("\n").filter((el) => el !== "");
    this.logger.log("Loaded file length", file.length);
    return file;
  }

  public async write(data: any, pathToFile: any): Promise<void> {
    const self = this;
    fs.writeFile(pathToFile, data, "utf8", function (err) {
      if (err) {
        return self.logger.log(
          "An error occured while writing JSON Object to File."
        );
      }

      self.logger.log("JSON file has been saved.");
    });
  }
}
