const express =  require('express');
const router = express.Router();
const {getAllUsers, getUserInfo,updateUserRecord,deleteUser} = require('../controllers/users');
const {isAuthenticatedUser,authorizeRoles} = require('../MiddleWare/JwtVerify')

router.route('/users').get(isAuthenticatedUser, authorizeRoles("admin"),getAllUsers);

router.route('/getUserInfo/:id').get(isAuthenticatedUser,getUserInfo);

router.route('/updateUser/:id').put(isAuthenticatedUser,updateUserRecord);

router.route('/users/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteUser);



module.exports = router ;