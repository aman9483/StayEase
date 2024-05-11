const Hotels = require('../models/hotel');
const Room = require('../models/room')
exports.newHotels = async(req,res)=>{

    const {name, type,city,address,distance, photos,title,desc,rating,room,cheapestPrice,featured} = req.body

    try {


        const newHotel = await Hotels.create({

             name,
             type,
             city,
             address,
             distance,
             photos,
             title,
             desc,
             rating,
             room,
             cheapestPrice,
             featured
        });

        res.status(200).json({

            message: 'new hotel created successfully',
            newHotel
        })


        
    } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
    }
     
}

exports.getAllHotels = async(req,res)=>{

  const { min, max, ...others } = req.query;

     try {

      const hotels = await Hotels.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 15000 },
      }).limit(req.query.limit);
        res.status(200).json(hotels)

            
          

        
     } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
     }
}

exports.getHotelInfo = async(req,res)=>{

      try {

        const particularHotel = await Hotels.findById(req.params.id);

        res.status(200).json(particularHotel)
        

            
          
        
      } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
      }
}

exports.updateHotelRecord = async(req,res)=>{

    try {

        const updatedData = await Hotels.findByIdAndUpdate(req.params.id, {

            $set: req.body,
            new: true
        });

        res.status(200).json({

            message: 'hotel data Updated !',
            updatedData
        })


        
    } catch (error) {

        res.status(500).json({

            message: error.message
        })

        
        
    }
}

exports.deleteHotel = async(req,res)=>{

    try {

        await Hotels.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: 'hotel deleted !',
            
        })

        
        
    } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
    }
}

exports.countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotels.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  exports.countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotels.countDocuments({ type: "Hotel" });
      const apartmentCount = await Hotels.countDocuments({ type: "apartment" });
      const resortCount = await Hotels.countDocuments({ type: "resort" });
      const villaCount = await Hotels.countDocuments({ type: "villa" });
      const cabinCount = await Hotels.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  };

  exports.getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotels.findById(req.params.id);
      const list = await Promise.all(
        hotel.room.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };
  

