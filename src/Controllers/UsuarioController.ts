import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../Services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newUsuario = await UsuarioServices.createUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newUsuario: newUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const usuarios = UsuarioServices.listUsuarios();

        res.status(200).json({
            status: 'ok',
            usuarios: usuarios
        })
        res.render('usuarios', { usuarios: usuarios })
    }

    async updateUsuario(req: Request, res: Response){
        const usuario = UsuarioServices.updateUsuario = req.body;
        const dados: Prisma.UsuarioUpdateInput = req.body;

        if(dados.email !== "" && dados.nome !== ""){
            const updatedUsuario = await UsuarioServices.updateUsuario(usuario.id, dados)
            res.status(200).json({
                status: 'ok',
                updatedUsuario: updatedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }
    }

    async deleteUsuario(req: Request, res: Response){
        const usuario = UsuarioServices.deleteUsuario = req.body;

        if(usuario.id !== ""){
            const deletedUsuario = await UsuarioServices.deleteUsuario(usuario.id)
            res.status(200).json({
                status: 'ok',
                deletedUsuario: deletedUsuario
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados corretamente'
            })

        }
    }
}

export default new UsuarioController();