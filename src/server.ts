import { inject, injectable } from "inversify";
import { TYPES } from "./di/di-types";
import { ILogger } from "./service/logger/logger.interface";
import { IGeoLoaderService } from "./service/geo-loader/geo-loader.interfaces";
import { IRepository } from "./service/repository/repository,interface";

@injectable()
export class Server {
  constructor(
    @inject(TYPES.Logger) private readonly logger: ILogger,
    @inject(TYPES.FileReader)
    private readonly repository: IRepository,
    @inject(TYPES.GeoLoaderService)
    private readonly geoLoaderService: IGeoLoaderService
  ) {}

  public async getData() {
    const cities = await this.repository.getCities();
    await this.geoLoaderService.loadGsons(cities);
  }
}
