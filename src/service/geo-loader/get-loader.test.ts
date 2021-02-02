import { GeoLoaderService } from "./geo-loader";
import { diContainer } from "../../di/inversify.config";
import { TYPES } from "../../di/di-types";
import * as assert from "assert";

describe("GeoLoaderService", function () {
  it("При правильных городах получаем gson", async () => {
    const service = diContainer.get<GeoLoaderService>(TYPES.GeoLoaderService);
    const result = await service.loadGsons(["Омск", "Москва"]);
    assert.deepEqual(result.length === 2, true);
    assert.deepEqual((result[0] as any).type === "GeometryCollection", true);
    assert.deepEqual((result[1] as any).type === "GeometryCollection", true);
  });
});
