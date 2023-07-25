import { Response, NextFunction } from "express";
import { TypedRequestParams } from "../interfaces/IRequest";
import { HttpError } from "../utils/notes.errors";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import notesService from "../notes.service";

const idMiddleware = async (
  req: TypedRequestParams<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      throw new HttpError({
        name: "Id error",
        httpCode: StatusCodes.BAD_REQUEST,
        message: "There is no id in params",
      });

    const note = await notesService.getOne(req.params.id);
    if (!note) {
      throw new HttpError({
        name: "Not found",
        httpCode: StatusCodes.NOT_FOUND,
        message: "Can't find note with such id",
      });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export { idMiddleware };

/*        new HttpError({
          name: "Not found",
          httpCode: StatusCodes.NOT_FOUND,
          message: "Can't find note with such id",
        })*/
