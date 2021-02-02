import { inject, injectable } from "inversify";
import { TYPES } from "./di/di-types";
import { ILogger } from "./service/logger/logger.interface";
import { IFileReaderService } from "./service/file-reader/file-reader.interfaces";
import { IGeoLoaderService } from "./service/get-loader/geo-loader.interfaces";

@injectable()
export class Server {
  constructor(
    @inject(TYPES.Logger) private readonly logger: ILogger,
    @inject(TYPES.FileReader)
    private readonly fileReaderService: IFileReaderService,
    @inject(TYPES.GeoLoaderService)
    private readonly geoLoaderService: IGeoLoaderService
  ) {}

  public async getData() {
    const cities = this.fileReaderService.read(
      __dirname + "/assets/cities.txt"
    );
    await this.geoLoaderService.load(cities);
  }
}
