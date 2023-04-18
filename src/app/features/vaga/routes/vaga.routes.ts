import { Router } from "express";
import { VagaController } from "../controllers/vaga.controller";
import { checkLoginValidator } from "../../login/validators/check-login.validator";
import { checkRecrutadorValidator } from "../../recrutador/validators/check-recrutador.validator";

export const vagaRoutes = () => {
  const router = Router();

  router.get("/", new VagaController().list);
  router.post(
    "/",
    [checkLoginValidator, checkRecrutadorValidator],
    new VagaController().create
  );

  return router;
};
