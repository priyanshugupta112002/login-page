//define schema
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    password:{
        type:Number,
        require:true
    },
    confirmPassword:{
        type:Number,
        require:true
    },
    
})

//now we need to create a conection
const Register= new mongoose.model("Register",userSchema)
module.exports=Register;




