const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product')
const productRoute = require('./routes/productRoute')

app.use(express.json())


//route
app.use('/api/products', productRoute)

app.get('/' , (req, res) =>{
    res.send("Hello from node api updated")
})


mongoose.connect("mongodb+srv://admin:9510@backenddb.ezblupw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("Connected to Database")
    app.listen(3000, () => {
    console.log('Server is running')
});
})

.catch(() => {
    console.log("Connection failed!")
})