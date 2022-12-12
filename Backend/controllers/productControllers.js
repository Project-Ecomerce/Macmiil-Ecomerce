const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// get all product

const getAll = async (req,res) =>{
    try {
        const product = await prisma.product.findMany();
        res.json({
            status : 'success',
            product
        });
    } catch (error) {
        res.json({
            status:'Error',
            error,
        })
    }
}


// create custumers
const create = async (req,res) =>{
    try {
        const {Name,Price,Store} = req.body;
        const newProducts = await prisma.product.create({
            data:{
                Name,Price,Store 
            }
        })

        res.json({
            newProducts
        })
    } catch (error) {
        res.json({
            error
        })
    }
}

// GET ONE products

const getOne = async (req,res) =>{
    try {
        const{ProductId} = req.params; 
        const oneProducts = await prisma.products.findFirst({
            where:{
                ProductId: +ProductId
            }
        });

        if(!oneProducts){
            res.json({
                status: 'Error',
                message: 'The products you are looking for is not in the database',
              });
        }else{
            res.json({
                status: 'success',
                oneProducts,
              });
        }
    } catch (error) {
        res.json({
            error
        })
    }
}


//  delete
const deleteproducts = async(req,res) =>{
    try {
        const{ProductId} = req.params; 
        const oneProducts = await prisma.products.delete({
            where:{
                ProductId: parseInt(ProductId) 
            }
        });
    
         res.json({
            status: 'success',
            message: 'products deleted successfully!!!',
            oneProducts,
          })
    
        
    } catch (error) {
        res.json({
            error
        })
    }
}

module.exports ={
    getAll,
    create,
    // update,
    getOne,
    deleteproducts
}

