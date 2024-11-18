require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
app.use(express.json());

connectDb();

app.use('/api',serviceRoutes);
app.get('/',(req,res)=>{
    res.send("Welcome to API");
})

module.exports = app;