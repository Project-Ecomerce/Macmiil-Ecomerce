const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// export const addToCart = async (req,res) =>{
//     const { ProductId} = req.body
//     const { userId} = req.user

//     try {
//         const product = await prisma.product.findFirst({
//             where:{
//                 ProductId  
//             }
//         })
//         const existingproduct = await prisma.cart.findFirst({
//             where:{
//                 ProductId ,
//                 userId 
//             },
//             include:{
//              product:true,
//             //  product : {name, title, pricd} -> existingPro.product.title,
//              users : true,
//             //  users : {username, email, address} -> ex.users.
//             }
//         });
        
//         if (existingproduct){
//             const update = await prisma.cart.update({
//                 where:{
//                     id : existingproduct.id,
//                 },
//                 data:{
//                     qty :existingproduct.qty === product. Store ? existingproduct.qty : existingproduct.qty + 1,
//                 },
//                 include:{
//                     product :true,
//                 }
//             })

//             res.json({
//                 update,
//                 productMax: update.qty === product.Store,
//                 success: true,
//             })
//         } else {
//             const newItem = await prisma.cart.create ({
//                 data:{
//                     ProductId ,
//                     userId 
//                 },
//                 include:{
//                     product:true,
//                 }
//             })
//             res.json({ newItem, success: true });
//         }
//     } catch (error) {
//        res.json(error)
//        console.log(error) 
//     }
// };

// export const getCart = async(req,res) => {
//     const {userId} =  req.user;

//     try {
//         const myCart = await prisma.cart.findMany({
//            where:{
//             userId
//            },
             
//            include:{
//             producta: true,
//            }
//         })

//         res.json({ success:true,myCart})
//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// }

// get cart

const getcart = async (req,res) =>{
    try {
        const users = await prisma.cart.findMany({
            include: {
                product: true,
                users: true,

              }
        });
        res.json({
            status : 'success',
            users
        });
    } catch (error) {
        res.json({
            status:'Error',
            error,
        })
    }
}



// create
const createcart = async (req, res) => {
   
    try {
      const {qty, subId} = req.body;

      console.log(req.user)
      const newcart = await prisma.cart.create({
        data:{
            qty,
            userId:req.user.userId,
            ProductId : subId
            
    
        }
    })
      res.json({
        success: true,
        newcart,
      });
    } catch (error) {
      console.log(error)
      res.json({
        success: false,
        error,
      });
    }
  };


//   //   update 

// const updateCart = async (req, res) => {
//     const { qty } = req.body;
  
//     try {
//         const{cartId} = req.params;
//       const cart = await prisma.cart.update({
//         where: {
//             cartId: parseInt(cartId),
//         },
//         data: {
//           qty,
      
         
//         },
//       });
  
//       res.json({
//         success: true,
//         cart,
//       });
//     } catch (error) {
//       console.log(error)
//       res.json({
//         success: false,
//         error,
//       });
//     }
//   };


//      //  delete
// const deletecart = async(req,res) =>{
//     const{cartId} = req.params;

//     const cart = await prisma.cart.delete({
//         where:{
//             cartId: parseInt(cartId),
//         }
//      });

//      res.json({
//         status: 'success',
//         message: 'catagory deleted successfully!',
//         cart,
//       })

//     }





module.exports ={
    getcart,
    createcart,
    // updateCart,
        // getOne,
    // deletecart
}

