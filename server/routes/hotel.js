const express =  require('express');
const { newHotels, getAllHotels, updateHotelRecord, deleteHotel, getHotelInfo, countByCity, countByType, getHotelRooms } = require('../controllers/hotel');
const {isAuthenticatedUser,authorizeRoles} = require('../MiddleWare/JwtVerify')
const router = express.Router();

router.route('/newHotels').post(isAuthenticatedUser, authorizeRoles("admin"),newHotels);

router.route('/getAllHotels').get(getAllHotels);

router.route('/updateHotelInfo/:id').put(isAuthenticatedUser, authorizeRoles("admin"),updateHotelRecord);

router.route('/deleteHotel/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteHotel);

router.route('/getHotel/:id').get(getHotelInfo);

router.route('/countByCity').get(countByCity);
router.route('/countByType').get(countByType);
router.route("/room/:id").get(getHotelRooms)

module.exports = router;