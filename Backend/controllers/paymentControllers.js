const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// get all product

const getAll = async (req,res) =>{
    try {
        const payment = await prisma.payment.findMany({
          // include: {
          //   cart : true,
          //   users:true,
          //   product:true
          // }
        });
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
          ProductId : subId,
            cartId:car
        }
    })
    console.log(newpayment)
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

  //  update user

 const update = async (req, res) => {
  const { is_paid, is_deliveredn} =  req.body;

  try {
      const{id} = req.params;
    const user = await prisma.payment.update({
      where: {
        id: +id,
      },
      data: {
        is_deliveredn,is_paid,userId:req.user.userId
      },
    });

    res.json({
      success: true,
      user,
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
    update,
    // getOne,
    // deleteproducts
}

