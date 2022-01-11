import TicketController from "./controller/TicketController";

export const Routes = [
  createRoute("post", "/ticket", TicketController, "save"),
  createRoute("get", "/ticket", TicketController, "all"),
  createRoute("patch", "/ticket/:id", TicketController, "update"),
];

function createRoute(m: string, r: string, c: any, a: string, p?: any) {
  return {
    method: m,
    route: r,
    controller: c,
    action: a,
    perimissions: p,
    isAuthenticated: false,
  };
}
