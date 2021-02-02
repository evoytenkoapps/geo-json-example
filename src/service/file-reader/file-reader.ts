import { IFileReaderService } from "./file-reader.interfaces";
import { injectable } from "inversify";
import * as path from "path"
@injectable()
export class FileReader implements IFileReaderService {
  public read(pathToFile: string) {
    return fs.readFileSync(path.resolve(pathToFile), "utf8");
  }
}
