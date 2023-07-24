import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/notes.errors";
import ErrorHandler from "../utils/notes.errors";

export const errorsMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  ErrorHandler.handleError(err, res);
};
