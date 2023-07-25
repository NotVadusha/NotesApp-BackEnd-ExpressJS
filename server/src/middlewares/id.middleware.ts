import { Response, NextFunction } from "express";
import { TypedRequestParams } from "../interfaces/IRequest";
import { HttpError } from "../utils/notes.errors";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

const idMiddleware = (
  req: TypedRequestParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    throw new HttpError({
      name: "Id error",
      httpCode: StatusCodes.BAD_REQUEST,
      message: "There is no id in params",
    });
  next();
};

export { idMiddleware };
