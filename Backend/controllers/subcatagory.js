const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient

// get all catagory

const getAll = async (req,res) =>{
    try {
        const catagory= await prisma.subCatagory.findMany();
        res.json({
            status : 'success',
            catagory

        });
    } catch (error) {
        res.json({
            status:'Error',
            error,
        })
    }
}

// create
const createCategory = async (req, res) => {
    const { type, img,subId } = req.body;
    try {
      const category = await prisma.subCatagory.create({
        data: {
            type,
            img,
             CategoryId : subId
        },
      });
      res.json({
        success: true,
        category,
      });
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        error,
      });
    }
  };

//   update 

const updateCategory = async (req, res) => {
    const { type, img, } = req.body;
  
    try {
        const{subatCagoryId} = req.params;
      const category = await prisma.subCatagory.update({
        where: {
            subatCagoryId: Number(subatCagoryId),
        },
        data: {
          type,
          img,
        },
      });
  
      res.json({
        success: true,
        category,
      });
    } catch (error) {
      res.json({
        success: false,
        error,
      });
    }
  };

  //  delete
// const deletecat = async(req,res) =>{
//     const {subatCagoryId} = req.params;

//     const catagory = await prisma.subCatagory.delete({
//         where:{
//             subatCagoryId: parseInt(subatCagoryId),
//         }
//      });

//      res.json({
//         status: 'success',
//         message: 'catagory deleted successfully!',
//         catagory,
//       })

//     }

    module.exports ={
        getAll,
        createCategory,
        updateCategory,
        // getOne,
        // deletecat
    }