import { Router } from "express";
import { RecrutadorController } from "../controllers/recrutador.controller";
import { checkLoginValidator } from "../../login/validators/check-login.validator";

export const recrutadorRoutes = () => {
  const router = Router();

  router.get("/", [checkLoginValidator], new RecrutadorController().list);
  router.post("/", new RecrutadorController().create);

  return router;
};
