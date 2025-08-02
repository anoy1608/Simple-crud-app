const Product = require('../models/product')


const getProducts = async(req,res) =>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch{
        res.status(500).json({message: error.message})
    }
}


const getProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const products = await Product.findById(id)
        res.status(200).json(products)
    }
    catch{
        res.status(500).json({message: error.message})
    }
}

const postProduct = async(req,res) => {
    try{
        const products = await Product.create(req.body)
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


const updateProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const products = await Product.findByIdAndUpdate(id,req.body)

        if(!products){
            return res.status(400).json({message: "Product not found"})
        }
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}



const deleteProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const products = await Product.findByIdAndDelete(id,req.body)

        if(!products){
            return res.status(400).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted sucessfully"})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}




module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}