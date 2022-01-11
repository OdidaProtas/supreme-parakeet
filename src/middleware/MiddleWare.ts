import { NextFunction, Request, Response } from "express";

export default class MiddleWare {
  async pass(request: Request, response: Response, next: NextFunction) {
    next();
  }
}
