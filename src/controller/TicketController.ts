import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import Ticket from "../entity/Ticket";
import handleException from "../helpers/handleException";

export default class TicketController {
  private tR = getRepository(Ticket);

  async save(req: Request, res: Response, next: NextFunction, io: any) {
    const [d, e] = await handleException(this.tR.save(req.body));
    if (d) io.emit("new_ticket", d);
    return d ? d : e;
  }

  async all(req: Request, res: Response, next: NextFunction, io: any) {
    const [d, e] = await handleException(this.tR.find());
    return d || e;
  }

  async update(req: Request, res: Response, next: NextFunction, io: any) {
    const [d, e] = await handleException(
      this.tR.update(req.params.id, req.body)
    );
    return d || e;
  }
}
