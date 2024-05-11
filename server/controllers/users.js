const User = require('../models/users');

exports.getAllUsers = async(req,res)=>{

    try {

       const user = await User.find();

       res.status(200).json(

          
           user
       )

       
    } catch (error) {

       res.status(500).json({

           message: error.message
       })
       
    }
}

exports.getUserInfo = async(req,res)=>{

     try {

       const user = await User.findById(req.params.id);

       res.status(200).json({

           message: 'user found !',
           user
       })
       
     } catch (error) {

       res.status(500).json({

           message: error.message
       })
       
     }
}

exports.updateUserRecord = async(req,res)=>{

   try {

       const updatedData = await User.findByIdAndUpdate(req.params.id, {

           $set: req.body,
           new: true
       });

       res.status(200).json({

           message: 'user data Updated !',
           updatedData
       })


       
   } catch (error) {

       res.status(500).json({

           message: error.message
       })

       
       
   }
}

exports.deleteUser = async(req,res)=>{

   try {

       await User.findByIdAndDelete(req.params.id);

       res.status(200).json({

           message: 'user deleted !',
           
       })

       
       
   } catch (error) {

       res.status(500).json({

           message: error.message
       })
       
   }
}

