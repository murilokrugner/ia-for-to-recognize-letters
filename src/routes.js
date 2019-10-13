import { Router } from "express";

import UsersController from "./app/controllers/UsersController";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json("deu certo");
});

routes.get("/users", UsersController.index);

routes.post("/users", UsersController.store);

export default routes;
