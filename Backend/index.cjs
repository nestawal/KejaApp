const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin :'http://localhost:5173'}));
const bodyParser = require("body-parser");
const Database = require('./database.js');
const identityRoute = require("./routes/identityRoute.js");
const postRoute = require("./routes/postRoute.js");
const cartRoute = require("./routes/cartRoute.js");
const reqRoute = require("./routes/requestRoute.js")


app.use('/identities',identityRoute)
app.use("/Post",postRoute)
app.use("/Cart",cartRoute)
app.use("/requests",reqRoute)


mongoose.connect(Database)
    .then(()=>{
        console.log("database connected")
        app.listen(3001,()=>{
            console.log("3k running")
        });
    })
    .catch((error)=>{
        console.log("failed connection",error)
    });

