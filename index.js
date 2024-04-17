const { isUtf8 } = require('buffer');
const express = require('express');
const app = express();
const port = 9000
const fs = require("fs");

const productRoute = require ("./routes/productRoute")
// const path = require('path');
const home = fs.readFileSync('./index.html', "utf-8")
// const product = fs.readFileSync('./product.html', 'utf-8')
// const about = fs.readFileSync('./about.html', 'utf-8')
// const contact = fs.readFileSync('./contact.html', 'utf-8')
// const testimonial = fs.readFileSync('./testimonial.html', 'utf-8')

app.get('/', (req, res) =>{
        res.end(home)
})        
// })

// app.get("/about", (req, res) =>{
//     res.send(about)
// })


// app.get("/contact", (req, res) =>{
//     res.send(contact)
// })


// app.get("/product", (req, res) =>{
//     res.send(product)
// })


// app.get("/testimonial", (req, res) =>{
//     res.send(testimonial)
// })


//using product route 
app.use(productRoute)
//server will now handle json data
app.use(express.json())

app.listen(port, () => {
    console.log(`server started succesfully. click http://localhost:${port} 
    to open website`)
})
