const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// get all product

const getAll = async (req,res) =>{
    try {
        const payment = await prisma.payment.findMany();
        res.json({
            status : 'success',
            payment
        });
    } catch (error) {
        res.json({
            status:'Error',
            error,
        })
    }
}

// create
const create = async (req, res) => {
   
    try {
      const { subId,car} = req.body;
      const newpayment = await prisma.payment.create({
        data:{
            
          userId:req.user.userId,
            Product : subId,
            cartId:car

            
    
        }
    })
      res.json({
        success: true,
        newpayment,
      });
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        error,
      });
    }
  };

  module.exports ={
    getAll,
    create,
    // update,
    // getOne,
    // deleteproducts
}

