import { AppDataSource } from "../data-source";
import { Rota } from "../entities/Rota";

export const rotaRepository = AppDataSource.getRepository(Rota);