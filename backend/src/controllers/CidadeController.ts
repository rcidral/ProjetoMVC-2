import { Request, Response } from "express";
import { cidadeRepository } from "../repositories/cidadeRepository";

export class CidadeController {
    async create(request: Request, response: Response) {
        const requisicao = request.body;
        try {
            const cidadeCriada = await cidadeRepository.save(requisicao);
            await cidadeRepository.save(cidadeCriada);
            return response.status(201).json(`Cidade criada com sucesso! ${cidadeCriada}`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao criar cidade: ${error}`);
        }
    }
    async findAll(request: Request, response: Response) {
        try {
            const cidades = await cidadeRepository.find();
            return response.status(200).json(cidades);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar cidades: ${error}`);
        }
    }
    async findById(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const cidade = await cidadeRepository.findOneBy({ id: Number(id) });
            return response.status(200).json(cidade);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar cidade: ${error}`);
        }
    }
    async update(request: Request, response: Response) {
        const id = request.params.id;
        const requisicao = request.body;
        try {
            const cidade = await cidadeRepository.findOneBy({ id: Number(id) });
            if (!cidade) {
                return response.status(404).json(`Cidade não encontrada!`);
            }
            await cidadeRepository.update(id, requisicao);
            return response.status(200).json(`Cidade atualizada com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao atualizar cidade: ${error}`);
        }
    }
    async delete(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const cidade = await cidadeRepository.findOneBy({ id: Number(id) });
            if (!cidade) {
                return response.status(404).json(`Cidade não encontrada!`);
            }
            await cidadeRepository.delete(id);
            return response.status(200).json(`Cidade excluída com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao excluir cidade: ${error}`);
        }
    }
}
