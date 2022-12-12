const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const addToCart = async (req,res) =>{
    const { ProductId} = req.body
    const { userId} = req.user

    try {
        const product = await prisma.product.findFirst({
            where:{
                ProductId  
            }
        })
        const existingproduct = await prisma.cart.findFirst({
            where:{
                ProductId ,
                userId 
            },
            include:{
             product:true,
            }
        });
        
        if (existingproduct){
            const update = await prisma.cart.update({
                where:{
                    id : existingproduct.id
                }
            })
        }
    } catch (error) {
        
    }
}

