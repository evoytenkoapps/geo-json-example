import { IGeoLoaderService } from "./geo-loader.interfaces";
import { inject, injectable } from "inversify";
import axios from "axios";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../../di/di-types";

@injectable()
export class GeoLoaderService implements IGeoLoaderService {
  constructor(@inject(TYPES.Logger) private readonly logger: ILogger) {}

  public async loadGsons(cities: string[]): Promise<void> {
    const osms: number[] = await this.getOsms(cities);
    const gsons = await this.getGsons(osms);
  }

  private async getOsms(cities: string[]): Promise<number[]> {
    const result: number[] = [];
    for (const city of cities) {
      try {
        this.logger.log("Get OSM for:", city);
        const url = encodeURI(
          `https://nominatim.openstreetmap.org/search.php?q=${city}&polygon_geojson=1&format=jsonv2`
        );
        const res = await axios({
          method: "get",
          url: url,
          responseType: "json",
        });
        const osm = res.data[0].osm_id;
        if (osm) {
          this.logger.log("Get OSM for", city);
          result.push(osm);
        }
      } catch (e) {
        this.logger.error(e, "Cant get OSM for:", city);
        return [];
      }
    }
    this.logger.log("Get total ", result.length, "osms");
    return result;
  }

  private async getGsons(osms: number[]): Promise<Object[]> {
    const result: Object[] = [];
    for (const osm of osms) {
      try {
        this.logger.log("Get GeoJson for:", osm);
        const url = encodeURI(` http:polygons.openstreetmap.fr/?id=${osm}`);
        const res = await axios({
          method: "get",
          url: url,
          responseType: "json",
        });
        const gson = res.data[0].osm_id;
        if (osm) {
          this.logger.log("Got GeoJson for", osm);
          result.push(osm);
        }
      } catch (e) {
        this.logger.error(e, "Cant get GeoJson for:", osm);
        return [];
      }
    }
    this.logger.log("Get total ", result.length, "osms");
    return result;
  }
}
