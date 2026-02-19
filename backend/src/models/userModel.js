const mongoose=required('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }, 
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
},{timestamps:true});

module.exports=mongoose.model("user",userSchema);