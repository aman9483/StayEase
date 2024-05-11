const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },

  country:{

     type:String,
     required: true
  },

  img:{

    type:String,
    
 },

 city:{

  type:String,
  required: true
},

phone:{

  type:String,
  required: true
},


  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: String,
    default: "user"
  }
}, { timestamps: true });

module.exports = mongoose.model('User', usersSchema);
