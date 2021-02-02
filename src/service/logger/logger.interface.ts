export interface ILogger {
  log(...args): void;
  error(error, ...args): void;
  warn(...args): void;
  debug(...args): void;
}
