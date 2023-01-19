const { default: mongoose } = require("mongoose");



const productSchema = new mongoose.Schema({
    id:{type:String},
    name:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String},
    image:{type:[String]},
    price:{type:Number, min:1, required:true},
    quantity:{type:Number, min:0, required:true,default:10}
},
{
    versionKey: false,
    timestamps: true
});


const Product = mongoose.model("product", productSchema);

module.exports = Product