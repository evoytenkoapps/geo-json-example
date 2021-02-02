export interface IRepository {
  getCities(): Promise<string[]>;
}
