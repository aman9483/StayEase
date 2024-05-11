const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser =  require('cookie-parser');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running fine');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database connected successfully'))
        .catch(err => console.error('Error connecting to database:', err));
} catch (error) {
    console.log(error.message);
}

app.use(cors());
app.use(cookieParser())
app.use(express.json());


const hotelRoute = require('./routes/hotel');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const RoomRoute = require('./routes/rooms');

app.use('/api/v1', hotelRoute);
app.use('/api/v1',authRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', RoomRoute);