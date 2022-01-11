import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import * as cors from "cors";
import MiddleWare from "./middleware/MiddleWare";

require("dotenv").config();

const middleWare = new MiddleWare();

createConnection()
  .then(async (connection) => {
    const app = express();
    const http = require("http");
    const server = http.createServer(app);
    const io = require('socket.io')(server, {
      cors: {
          origin: '*',
          methods: ['GET', 'POST']
      }
  })

    app.use(bodyParser.json());
    app.use(cors("*" as any));

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next,
            io
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    app.get("/", (req: Request, res: Response, next: express.NextFunction) => {
      return res.send("it works");
    });

    server.listen(process.env.PORT);

    console.log("Geos server has started on port: " + process.env.PORT);

    console.log("\nVerifying superuser credentials");
  })
  .catch((error) => console.log(error));
