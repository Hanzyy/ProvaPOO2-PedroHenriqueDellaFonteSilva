import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

class LanceServices{
    constructor(){}

    async listLances(id?: string){
        try{
            if (id){
                const lance = await prisma.lance.findUnique({
                    where:{
                        id
                    }
                });return lance
            }
            else{
                const lances = await prisma.lance.findMany();
                return lances
            }
        }catch(error){
            console.log(error)
            return null
        }
    };

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newLance = await prisma.lance.create({
                data: lance
            });
            return newLance
        }catch(error){
            console.log(error)
            return null
        }
    }
    
    async updateLance(id: string, lance: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where:{
                    id
                },
                data:lance
            });return updatedLance
        }catch(error){
            console.log(error)
            return null
        }
    }

    async deleteLance(id: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where:{
                    id
                }
            });return deletedLance
        }catch(error){
            console.log(error)
            return null
        }
    }
};


export default new LanceServices();