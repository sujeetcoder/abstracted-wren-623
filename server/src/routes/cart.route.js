const express=require("express")
const adminAuth = require("../middlewares/adminAuth")
const userAuth = require("../middlewares/userAuth")
const Cart = require("../models/cart.model")
const Product = require("../models/products.model")

const app=express.Router()
app.use(userAuth)


app.get("/",  async (req, res) => {
    let carts;
        carts = await Cart.find({user:req.user,type:"cart"}).populate(["user","product"])
    try {
        if(carts){
            res.send(JSON.stringify(carts))
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})

app.get("/order",  async (req, res) => {
    let carts;
        carts = await Cart.find({user:req.user,type:"order"}).populate(["user","product"])
    try {
        if(carts){
            res.send(JSON.stringify(carts))
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})

app.patch("/:_id" , async (req, res) => {
    
    let _id = req.params._id
    try {
        let existing = await Cart.findOneAndUpdate({_id},{approve:true},{new: true})
        if(existing){
            res.send("cart updated successfully")  
        } else {
            res.send("cart not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})

app.patch("/change/:_id" , async (req, res) => {
    const {quantity} = req.body
    let _id = req.params._id
    try {
        let existing = await Cart.findOneAndUpdate({_id},{quantity},{new: true})
        if(existing){
            res.send("cart updated successfully")  
        } else {
            res.send("cart not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})


app.get("/allcarts/all", async (req, res) => {
    let carts;
        carts = await Cart.find().populate(["user","product"])
    
    try {
        if(carts){
            res.send(JSON.stringify(carts))
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.send(e.message)
    }
})


app.post("/",  async (req, res) => {
    const {product} = req.body
    
    try {
        let existing = await Product.findOne({_id:product})
        if(existing){
            let carts = await Cart.create({
                user:req?.cookies?._id,product
            })
            res.send("Cart added successfully")
        } else {
            res.status(404).send("product out of stack")
        }
    } catch (e) {
        res.send(e.message)
    }
})




app.delete("/deleteone/:_id",  async (req, res) => {
    let _id = req.params._id
    try {
        let existing = await Cart.findOneAndDelete({_id})
        if(existing){
            res.send(`Cart deleted successfully`)
        } else {
            res.send("Cart not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})

app.patch("/payment/done",  async (req, res) => {
    
    try {
        let existing = await Cart.findByIdAndUpdate({user:req?.cookies?._id},{type:"order"},{new:true})
        if(existing){
            res.send(`Order successfully`)
        } else {
            res.status(404).send("Cart not found")
        }
    } catch (e) {
        res.status(404).send(e.message)
    }
   
})




module.exports=app