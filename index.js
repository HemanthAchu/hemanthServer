const express =require('express')
const cors =require('cors')
require('dotenv').config();
const router =require('./routes/router');
const bodyParser = require('body-parser');
const server =express()

 require('./DB/connetion') 
server.use(cors())
server.use(express.json())
server.use(router)
server.use(bodyParser.json({extended :true}))
server.use(bodyParser.urlencoded({extended :true}))

const PORT = 4000 || process.env.PORT

server.listen(PORT,()=>{
console.log(`server runing at ${PORT}`);
})