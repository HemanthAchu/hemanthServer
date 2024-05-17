const mongoose =require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("Mongodb atlas connected with index.js");
    }
).catch(err=>{
    console.log(err);
    console.log("Connection Failed in mongoose connection");
})