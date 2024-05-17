const projects =require('../model/model')
exports.addUsers =async(req,res)=>{
   
   console.log(req.body);
   
try{
console.log('inside');
const { name, caloriesPerServing, cookTimeMinutes, cuisine, prepTimeMinutes } = req.body;

   const newUser =new projects({
     name,caloriesPerServing,caloriesPerServing,cookTimeMinutes,cuisine,prepTimeMinutes
  })
  //to store data to mongodb from mongoose model
  
  await newUser.save()
  res.status(200).json(newUser)

  
}catch(err){
console.log(err);
}
}

exports.getData =async(req,res)=>{
   try{
       const AllData =await projects.find()
       res.status(200).json(AllData)

   }catch(err){
  res.status(401).json(err)
   }

}  


exports.deleteData=async(req,res)=>{
   const{id}=req.params
   console.log(id);
  try{ 
   const deletedata =projects.findByIdAndDelete(id)
console.log("hem");
   res.status(200).json(deletedata)
  }catch(err){
res.status(401).json(err)
  }

   
}


exports.editUser =async(req,res)=>{
   const userId =req.payload
   const { name, caloriesPerServing, cookTimeMinutes, cuisine, prepTimeMinutes } = req.body;
try{
 const updateUser =await projects.findByIdAndUpdate({_id:userId},{
   name,caloriesPerServing,caloriesPerServing,cookTimeMinutes,cuisine,prepTimeMinutes
 })
 await updateUser.save()
 res.status(200).json(updateUser)
}catch(err){
res.status(401).json(err)
}
}
