import { IGeoLoaderService } from "./geo-loader.interfaces";
import { inject, injectable } from "inversify";
import axios from "axios";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../../di/di-types";

@injectable()
export class GeoLoaderService implements IGeoLoaderService {
  constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}
  public async load(cities: string[]): Promise<void> {
    for (const city of cities) {
      this.logger.log("Load data for:", city);
      const url = `https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`;
      const res = await axios({
        method: "get",
        url: url,
        responseType: "json",
      });
      this.logger.log("Data loaded", JSON.stringify(res));
    }
  }
}
