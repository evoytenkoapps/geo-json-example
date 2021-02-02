export interface IRepository {
  getCities(): Promise<string[]>;
  saveCities(cities: object[]): Promise<void>;
}
