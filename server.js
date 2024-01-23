const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var MongoDBStore = require('connect-mongodb-session')(session);


const PORT = process.env.PORT || 5000;
const app = express();

dotEnv.config();

app.listen(PORT, ()=>{
    console.log(`server started and running at  ${PORT}`)
})


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Succesfully!");
    })
    .catch((error) => {
        console.log(`${error}`);
});






