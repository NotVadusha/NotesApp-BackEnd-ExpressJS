import { Request, Response, NextFunction } from "express";

const notesMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    next();
  } catch (e) {
    res.status(500).json(e);
  }
};

export default notesMiddleware;
