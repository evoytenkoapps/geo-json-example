export interface IGeoLoaderService {
  load(cities: string[]): Promise<void>;
}
