export class BinanceError extends Error {
  code: number;
  constructor(message: string, code: number = 0) {
    super(message);
    this.name = "BinanceError";
    this.code = code;
  }
}
