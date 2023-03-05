import { Request, Response } from "express";
import { rotaRepository } from "../repositories/rotaRepository";

export class RotaController {
    async create(request: Request, response: Response) {
        const requisicao = request.body;
        try {
            const rotaCriada = await rotaRepository.save(requisicao);
            await rotaRepository.save(rotaCriada);
            return response.status(201).json(`Rota criada com sucesso! ${rotaCriada}`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao criar rota: ${error}`);
        }
    }
    async findAll(request: Request, response: Response) {
        try {
            const rotas = await rotaRepository.find({relations: ["cidade_origem_id", "cidade_destino_id", "caminhao_id"]});
            return response.status(200).json(rotas);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar rotas: ${error}`);
        }
    }
    async findById(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const rota = await rotaRepository.find({where: {id: Number(id)}, relations: ["cidade_origem_id", "cidade_destino_id", "caminhao_id"]});
            return response.status(200).json(rota);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar rota: ${error}`);
        }
    }
    async update(request: Request, response: Response) {
        const id = request.params.id;
        const requisicao = request.body;
        try {
            const rota = await rotaRepository.find({where: {id: Number(id)}, relations: ["cidade_origem_id", "cidade_destino_id", "caminhao_id"]});
            if (!rota) {
                return response.status(404).json(`Rota não encontrada!`);
            }
            await rotaRepository.update(id, requisicao);
            return response.status(200).json(`Rota atualizada com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao atualizar rota: ${error}`);
        }
    }
    async delete(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const rota = await rotaRepository.findOneBy({ id: Number(id) });
            if (!rota) {
                return response.status(404).json(`Rota não encontrada!`);
            }
            await rotaRepository.delete(id);
            return response.status(200).json(`Rota excluída com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao excluir rotas: ${error}`);
        }
    }
}
