// METACRITIC DOESN'T HAVE AN API BUT I AM TRYING TO FIND A LITTLE WORK AROUND SO WE DON'T HAVE TO USE EXPRESS
// IF YOU'RE COMFORTABLE USING EXPRESS THEN WE CAN SET THAT UP!

// importing packages
const express = require('express');
const path = require('path');

// this is for a .env file! used to hide credentials and shit
require('dotenv').config();

// set up express & port
const app = express();
const PORT = process.env.PORT || 3002

// middleware handling
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

// static path DECLARED for /public not /pubic (different file)
app.use(express.static(path.join(__dirname, 'public')));

// go live on the port
app.listen(PORT, () => 
    console.log(`server live on ${PORT}`));