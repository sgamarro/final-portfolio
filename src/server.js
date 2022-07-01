const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const PORT = process.env.PORT  || 5000;

app.use("/", express.static(path.join(__dirname, '../public')));

app.listen(PORT, (req,res)=>{
    console.log("Server is working on port" + PORT)
})