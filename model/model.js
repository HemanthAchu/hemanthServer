const mongoose =require('mongoose')
const productSchema =new mongoose.Schema({
name:{
    type:String,
    required:true,
   
},
caloriesPerServing:{
    type:String,
    required:true,
    
},
cookTimeMinutes:{
    type:String,
    required:true,
   
},

cuisine:{
    type:String,
    required:true,
   
},
prepTimeMinutes:{
    type:String,
    required:true
}

})
 const clients= mongoose.model('clients',productSchema)
 module.exports=clients
