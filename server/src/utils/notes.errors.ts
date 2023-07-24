import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IError } from "../interfaces/IError";

export class HttpError extends Error {
  public readonly name: string;
  public readonly httpCode: StatusCodes;

  constructor(args: IError) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.httpCode = args.httpCode;

    Error.captureStackTrace(this);
  }
}

class ErrorHandler {
  public handleError(error: Error | HttpError, res: Response): void {
    if (error instanceof HttpError) {
      console.log(1);
      res
        .status(error.httpCode)
        .json({ name: error.name, message: error.message });
    }
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ name: error.name, message: error.message });
  }
}

export default new ErrorHandler();
