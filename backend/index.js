const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routes/user')
require('dotenv').config();
const app = express();
app.use(cors());

app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true)
mongoose.connect(uri, err => {
    if (err) throw err;
})

app.use('/users', UserRouter);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose database connection established sucessfully")
})


app.listen(1234, () => {
    console.log("server running on the port 1234")
});