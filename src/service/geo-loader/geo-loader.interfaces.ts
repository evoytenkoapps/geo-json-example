export interface IGeoLoaderService {
  loadGsons(cities: string[]): Promise<Object[]>;
}
