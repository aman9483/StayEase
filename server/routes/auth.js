const express =  require('express');
const { Register, Login,logoutUser } = require('../controllers/auth');
const router = express.Router();

router.route('/Register').post(Register);

router.route('/Login').post(Login);

router.route('/logout').get(logoutUser);



module.exports = router ;