const mongoose =require("mongoose")



const userSchema=new mongoose.Schema({
    fName:{type:String,required:true},
    lName:{type:String,required:true},
    phone:{type:Number},
    email:{type:String,required:true,unique:true},
    country:{type:String},
    countryCode:{type:String},
    type:{type:String},
    birth:{type:String},
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

