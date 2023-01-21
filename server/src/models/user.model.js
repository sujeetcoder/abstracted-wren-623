const mongoose =require("mongoose")



const userSchema=new mongoose.Schema({
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    country:{type:String,required:true},
    countryCode:{type:String,required:true},
    type:{type:String,required:true},
    birth:{type:String,required:true},
    password:{type:String,required:true},
    ipAddress:{type:String,required:true},
    role:{type:String,enum:["user","admin","CEO"],default:"user"},
    status:{type:String,enum:["active","ban"],default:"active"},
    logStatus: {type:Boolean, default:false},
},
{
    versionKey: false,
    timestamps: true
})

const User=mongoose.model("user",userSchema)

module.exports=User

