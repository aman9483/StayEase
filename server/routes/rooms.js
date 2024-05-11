const express =  require('express');
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} = require( "../controllers/room");
const { authorizeRoles, isAuthenticatedUser } = require("../MiddleWare/JwtVerify");

const router = express.Router();

router.route('/:hotelid').post(isAuthenticatedUser,authorizeRoles("admin"),createRoom)

router.put("/availability/:id", updateRoomAvailability);
router.put("/:id",isAuthenticatedUser, authorizeRoles("admin"), updateRoom);

router.delete("/:id/:hotelid", isAuthenticatedUser, authorizeRoles("admin"), deleteRoom);


router.get("/:id", getRoom);


router.get("/", getRooms);

module.exports = router;