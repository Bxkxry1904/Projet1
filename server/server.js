const express = require("express");
const cors = require("cors")
require ("dotenv").config({path: "./config/.env"})
const authRoutes = require("./routes/auth.routes")
const app = express();
require("./config/db");

//the midlwear

app.use(cors());
app.use(express.json());

port = process.env.PORT || 5000;
console.log(port)
//the Routes
app.use('/api' , authRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`the server is running on port ${process.env.PORT}`);
});
