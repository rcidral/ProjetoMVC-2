import { Router } from "express";
import { CidadeController } from "./controllers/CidadeController";
import { CaminhaoController } from "./controllers/CaminhaoController";
import { RotaController } from "./controllers/RotaController";

const routes = Router();

routes.post("/cidades", new CidadeController().create);
routes.post("/caminhoes", new CaminhaoController().create);
routes.post("/rotas", new RotaController().create);

routes.get("/cidades", new CidadeController().findAll);
routes.get("/caminhoes", new CaminhaoController().findAll);
routes.get("/rotas", new RotaController().findAll);

routes.get("/cidades/:id", new CidadeController().findById);
routes.get("/caminhoes/:id", new CaminhaoController().findById);
routes.get("/rotas/:id", new RotaController().findById);

routes.put("/cidades/:id", new CidadeController().update);
routes.put("/caminhoes/:id", new CaminhaoController().update);
routes.put("/rotas/:id", new RotaController().update);

routes.delete("/cidades/:id", new CidadeController().delete);
routes.delete("/caminhoes/:id", new CaminhaoController().delete);
routes.delete("/rotas/:id", new RotaController().delete);


export default routes;