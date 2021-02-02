import { inject, injectable } from "inversify";
import { TYPES } from "./di/di-types";
import { ILogger } from "./service/logger/logger.interface";
import { IFileReaderService } from "./service/file-reader/file-reader.interfaces";

@injectable()
export class Server {
  constructor(
    @inject(TYPES.Logger) private readonly logger: ILogger,
    @inject(TYPES.FileReader)
    private readonly fileReaderService: IFileReaderService
  ) {}

  public getData() {
    this.fileReaderService.read(__dirname + "/assets/cities.txt");
  }
}
