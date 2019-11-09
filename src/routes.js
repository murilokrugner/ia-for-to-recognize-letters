import { Router } from "express";

import UsersController from "./app/controllers/UsersController";

const routes = new Router();

routes.post("/users", UsersController.store);

routes.get("/users/:name", UsersController.index);

export default routes;
