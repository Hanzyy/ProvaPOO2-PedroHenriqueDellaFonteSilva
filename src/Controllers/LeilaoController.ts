import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../Services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.datalimite !== "" && dados.preco !== null && dados.produto !== ""){
            const newLeilao = await LeilaoServices.createLeilao(dados)
            res.status(200).json({
                status: 'ok',
                newUsuario: newLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const leiloes = LeilaoServices.listLeilao();

        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
        res.render('leiloes', { leiloes: leiloes })
    }

    async updateLeilao(req: Request, res: Response){
        const leilao = LeilaoServices.updateLeilao = req.body;
        const dados: Prisma.LeilaoUpdateInput = req.body;

        if(dados.produto !== "" && dados.datalimite !== "" && dados.preco !==null){
            const updatedLeilao = await LeilaoServices.updateLeilao(leilao.id, dados)
            res.status(200).json({
                status: 'ok',
                updatedLeilao: updatedLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteLeilao(req: Request, res: Response){
        const leilao = LeilaoServices.deleteLeilao = req.body;

        if(leilao.id !== ""){
            const deletedLeilao = await LeilaoServices.deleteLeilao(leilao.id)
            res.status(200).json({
                status: 'ok',
                deletedLeilao: deletedLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new LeilaoController();