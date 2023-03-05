import { Request, Response } from "express";
import { caminhaoRepository } from "../repositories/caminhaoRepository";

export class CaminhaoController {
    async create(request: Request, response: Response) {
        const requisicao = request.body;
        try {
            const caminhaoCriado = await caminhaoRepository.save(requisicao);
            await caminhaoRepository.save(caminhaoCriado);
            return response.status(201).json(`Caminhão criado com sucesso! ${caminhaoCriado}`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao criar caminhão: ${error}`);
        }
    }
    async findAll(request: Request, response: Response) {
        try {
            const caminhoes = await caminhaoRepository.find();
            return response.status(200).json(caminhoes);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar caminhões: ${error}`);
        }
    }
    async findById(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const caminhao = await caminhaoRepository.findOneBy({ id: Number(id) });
            return response.status(200).json(caminhao);
        }
        catch (error) {
            return response.status(400).json(`Erro ao buscar caminhão: ${error}`);
        }
    }
    async update(request: Request, response: Response) {
        const id = request.params.id;
        const requisicao = request.body;
        try {
            const caminhao = await caminhaoRepository.findOneBy({ id: Number(id) });
            if (!caminhao) {
                return response.status(404).json(`Caminhão não encontrado!`);
            }
            await caminhaoRepository.update(id, requisicao);
            return response.status(200).json(`Caminhão atualizado com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao atualizar caminhão: ${error}`);
        }
    }
    async delete(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const caminhao = await caminhaoRepository.findOneBy({ id: Number(id) });
            if (!caminhao) {
                return response.status(404).json(`Caminhão não encontrado!`);
            }
            await caminhaoRepository.delete(id);
            return response.status(200).json(`Caminhão excluído com sucesso!`);
        }
        catch (error) {
            return response.status(400).json(`Erro ao excluir caminhão: ${error}`);
        }
    }
}