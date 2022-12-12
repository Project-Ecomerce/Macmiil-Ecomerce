const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all users

const getAll = async (req,res) =>{
    try {
        const users = await prisma.users.findMany();
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

// create receipt

const create  = async (req,res) =>{
    try {
        const { FirstName, LastName, Address,Email,Password} =  req.body;


        const checkEmail = await prisma.users.findFirst({
            where :  {
              Email,
            }
        })

        if(checkEmail) {
            res.json({
                status : "Error",
                msg : "Email is already in use"
            })
            return
        }

       

    const newUser = await prisma.users.create({
        data:{
            FirstName, LastName, Address,Email,Password
        }
    })
    res.json({
        newUser
    })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

// GET ONE user
const getOne = async (req,res) =>{
    try {
        const {userId} = req.params;

        const users = await prisma.users.findFirst({
            where:{
                userId: +userId
                
            }
            });
            if (!users){
                res.json({
                    status: 'Error',
                    message: 'The users you are looking for is not in the database',
                  });
            }else{
                res.json({
                    status: 'success',
                    users,
                  });
            }
    } catch (error) {
        res.json({
            error,
          });
    }
 }


 //  delete

const deleteuser = async(req,res) =>{
    const {userId} = req.params;

    const users = await prisma.users.delete({
        where:{
            userId: parseInt(userId),
        }
     });

     res.json({
        status: 'success',
        message: 'users deleted successfully!',
        users,
      })

    }


    module.exports ={
        getAll,
        create,
        // update,
        getOne,
        deleteuser
    }