const express = require('express');
const app = new express();
const router = require('./src/routes/api');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var hpp = require('hpp');
//var sanitizerPlugin = require(ExpressMongoSanitize);
const helmet = require('helmet');
const ratelimit = require('express-rate-limit');
const ExpressMongoSanitize = require('express-mongo-sanitize');




app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(hpp());
app.use(ExpressMongoSanitize());
app.use(helmet());



app.use('/',router);


app.use((req,res)=>{
    res.status(404).send('404 not found');
})

module.exports=app;



