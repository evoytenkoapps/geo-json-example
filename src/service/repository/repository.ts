import { IRepository } from "./repository,interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../../di/di-types";
import { IFileReaderService } from "../file-reader/file-reader.interfaces";

@injectable()
export class Repository implements IRepository {
  constructor(
    @inject(TYPES.FileReader)
    private readonly fileReaderService: IFileReaderService
  ) {}

  public async getCities(): Promise<string[]> {
    return this.fileReaderService.read(__dirname + "/assets/cities.txt");
  }
}
