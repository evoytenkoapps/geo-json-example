export interface IFileReaderService {
  read(pathToFile: string): string[];
  write(data: any, pathToFile: any): Promise<void>;
}
