const mongoose =require('mongoose')
const {Schema}=mongoose;

const UserDataSchema=new Schema({
    
   
    email:{
        type:String,
        required:true
    },
    Data:{
        type:Array,
        required:true
    },
    
    
})
module.exports=mongoose.model('user',UserDataSchema)