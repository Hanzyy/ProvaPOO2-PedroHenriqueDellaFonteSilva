import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../Services/LanceServices";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.comprador !== "" && dados.valor !== null && dados.leilao !== ""){
            const newLance = await LanceServices.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newLance: newLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLance(req: Request, res: Response){
        const lances = LanceServices.listLances();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
        res.render('lances', { lances: lances })
    }

    async updateLance(req: Request, res: Response){
        const lance = LanceServices.updateLance = req.body;
        const dados: Prisma.LanceUpdateInput = req.body;

        if(dados.comprador !== "" && dados.leilao !== "" && dados.valor !==null){
            const updatedLance = await LanceServices.updateLance(lance.id, dados)
            res.status(200).json({
                status: 'ok',
                updatedLance: updatedLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteLance(req: Request, res: Response){
        const lance = LanceServices.deleteLance = req.body;

        if(lance.id !== ""){
            const deletedLance = await LanceServices.deleteLance(lance.id)
            res.status(200).json({
                status: 'ok',
                deletedLance: deletedLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new LanceController();