import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class UsuarioServices{
    constructor(){}

    async listUsuarios(id?: string){
        try{
            if (id){
                const usuario = await prisma.usuario.findUnique({
                    where:{
                        id
                    }
                });return usuario
            }
            else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios
            }
        }catch(error){
            console.log(error)
            return null
        }
    }

    async createUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const newUsuario = await prisma.usuario.create({
                data: usuario
            });
            return newUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }

    async updateUsuario(id: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const updatedUsuario = await prisma.usuario.update({
                where:{
                    id
                },
                data:usuario
            });return updatedUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteUsuario(id: string){
        try{
            const deletedUsuario = await prisma.usuario.delete({
                where:{
                    id
                }
            });return deletedUsuario
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new UsuarioServices();