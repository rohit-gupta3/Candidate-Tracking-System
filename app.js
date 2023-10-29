const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//.env file
const dotenv = require('dotenv')
dotenv.config({path:'config.env'})
const PORT = process.env.PORT ||3000;

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs");

app.use('/',require("./server/routes/routes"))


app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`);
})
