import { AppDataSource } from "../data-source";
import { Caminhao } from "../entities/Caminhao";

export const caminhaoRepository = AppDataSource.getRepository(Caminhao);