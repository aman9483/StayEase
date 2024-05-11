const User = require('../models/users');
const bcrypt  = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.Register = async(req,res)=>{

     try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({

            ...req.body,
            password:hash,
        });

        await newUser.save();

        res.status(200).json({

            message: 'User Register Successfully',
            newUser
        })
        
     } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
     }
}

exports.Login = async (req, res) => {
    try {
        const user = await User.findOne({ userName: req.body.userName });

        if (!user) {
            return res.status(400).json({
                message: 'User Not Found',
            });
        }

        const isPassCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPassCorrect) {
            return res.status(400).json({
                message: 'Wrong Username or Password',
            });
        }

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.jwt_secret_key
        );

        const { password, isAdmin, ...otherDetails } = user._doc;

        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({
            details: { ...otherDetails },
            isAdmin: user.isAdmin
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


exports.logoutUser = async(req, res,next)=>{

    try{

         res.cookie("access_token", null,{

              expires: new Date(Date.now()),
              httpOnly: true,


         });

          res.status(200).json({

              message: "LOG OUT SUCCESSFULLY",
              success: true
          })
    }catch(e){

         res.status(500).json({
            
             message: e.message,
             success: false
         })
    }
}