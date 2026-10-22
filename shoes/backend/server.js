const mongoose = require("mongoose")  //connect all packages
const cors = require("cors")        //connect all packages
const express = require("express")  //connect all packages
const multer = require("multer")
const bcrypt = require("bcrypt")

const app = express()                      // make an app variable to connect express and cors
app.use(cors())                           //
app.use(express.json())                 // convert into json 

app.listen(9000, () => {              //make a server host 9000 
    console.log("server is running") //console show on terminal to check its working or not
})

mongoose.connect("mongodb://localhost:27017/Shoes")      //connect with mongodb 
    .then(() => console.log("database connected"))      // then mean code running perfectly
    .catch((err) => console.log(err))                  // catch means something error


const Register = mongoose.Schema(
    {
        Firstname: String,
        Lastname: String,
        Email: String,
        Password: String

    }
)
const Registermodel = mongoose.model("Registers", Register, "Registers")

app.post("/api/register", async (req, res) => {

    const hash = bcrypt.hashSync(req.body.password, 10)


    const exist = await Registermodel.findOne({
        Email: req.body.email
    })
    console.log(exist)
    if (exist) {
        res.send({ statuscode: 2, mgs: "email already used" })
    }
    else {
        const result = await Registermodel({
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Password: hash
        })
        if (result) {
            const response = await result.save()
            console.log(response)
            if (response) {
                res.send({ statuscode: 1, msg: "registered" })
            }
            else {
                res.send({ statuscode: 0, msg: "error" })
            }
        }
    }



})

app.post("/api/login", async (req, res) => {



    const result = await Registermodel.findOne({ Email: req.body.email })
    const cpass = bcrypt.compareSync(req.body.pass, result.Password)
    if (result) {
        if (cpass == true) {
            res.send({ statuscode: 1, msg: "password matched" })
        }
        else {
            res.send({ statuscode: 0, msg: "password error" })
        }
    }
    else {
        alert(res.send({ statuscode: 0, msg: "user not found" }))
    }
})



const Contact = mongoose.Schema({
    Name: String,
    Email: String,
    Phone: String,
    Subject: String,
    Message: String
})
const Contactmodel = mongoose.model("Contacts", Contact, "Contacts")
app.post("/api/contactus", async (req, res) => {
    const result = await Contactmodel({
        Name: req.body.name,
        Email: req.body.Email,
        Phone: req.body.phone,
        Subject: req.body.subject,
    })
    if (result) {
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "form submitted" })
        }
        else {
            res.send({ statuscode: 0, msg: "form error" })
        }
    }

})



var pic;

const mystorage = multer.diskStorage({  // multer job received a file. Where should I save it, and                                      what should I call it?"


    destination: (req, file, cb) => {
        cb(null, "../frontend/public/uploads") // multer send image to giving destination
    },
    filename: (req, file, cb) => {
        pic = Date.now() + "-" + file.originalname,  // multer provide name to the image
            cb(null, pic)
    }
})
const upload = multer({ storage: mystorage })

const Categorys = mongoose.Schema({

    Category: String,
    Cateimg: String

})
const Categorymodel = mongoose.model("Category", Categorys, "Category")
app.post("/api/category", upload.single("pic"), async (req, res) => {

    const result = await Categorymodel({
        Category: req.body.category,
        Cateimg: pic

    })
    if (result) {
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "upload" })
        }
        else {
            res.send({ statuscode: 0, msg: "upload error" })
        }

    }
})
app.get("/api/getcategory", async (req, res) => {

    const result = await Categorymodel.find()
    if (result) {
        res.send({ statuscode: 1, data: result, msg: "category get" })
    }
    else {
        res.send({ statuscode: 0, msg: "error" })
    }
})


const Brands = mongoose.Schema({
    Category: String,
    Brand: String,
    Brandimg: String
})
const Brandmodel = mongoose.model("Brand", Brands, "Brand")
app.post("/api/branded", upload.single("pic"), async (req, res) => {
    const result = await Brandmodel({
        Category: req.body.category,
        Brand: req.body.brand,
        Brandimg: pic
    })
    if (result) {
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "brand model update" })
        }
        else {
            res.send({ statuscode: 0, msg: "error in brand" })
        }
    }

})
app.get("/api/getbrand/:id", async (req, res) => {
    const result = await Brandmodel.find({ Category: req.params.id })

    if (result.length > 0) {
        return res.send({ statuscode: 1, data: result })
    }
    return res.send({ statuscode: 0 })
})



const Products = mongoose.Schema({
    Name: String,
    Category: String,
    Brand: String,
    Description: String,
    Productimg: String,
    Price: Number,
    Saleprice: Number
})
const Productmodel = mongoose.model("Product", Products, "Product")

app.post("/api/prices", upload.single("pic"), async (req, res) => {
    const result = await Productmodel({
        Name: req.body.productname,
        Category: req.body.cat,
        Brand: req.body.brand,
        Description: req.body.description,
        Productimg: pic,
        Price: req.body.price,
        Saleprice: req.body.saleprice,
        Quantity: req.body.qty
    })
    if (result) {
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "price post success" })
        }
        else {
            res.send({ statuscode: 0, msg: "error in price " })
        }
    }
})

app.get("/api/getproduct", async (req, res) => {
    const result = await Productmodel.find()
    if (result) {
        res.send({ statuscode: 1, data: result, msg: "products get" })
    }
    else {
        res.send({ statuscode: 0, msg: "error in get products" })
    }
})
app.get("/api/getbybrand/:id", async (req, res) => {
    const result = await Productmodel.find({ Brand: req.params.id })

    if (result) {
        return res.send({ statuscode: 1, data: result })
    }
    return res.send({ statuscode: 0 })
})
app.get("/api/buynow/:id", async (req, res) => {
    const result = await Productmodel.find({ _id: req.params.id })
    if (result) {
        res.send({ statuscode: 1, msg: "buynow success", data: result })
    }
    else {
        res.send({ statuscode: 0, msg: "buy now error" })
    }
})

app.get("/api/categoryproduct/:id", async (req, res) => {
    const result = await Productmodel.find()
    if (result) {
        res.send({ statuscode: 1, data: result, msg: "products get" })
    }
    else {
        res.send({ statuscode: 0, msg: "error in get products" })
    }
})

const Cart = mongoose.Schema({

    Productname: String,
    Productimage: String,
    Price: String,
    quantity: String
})

const Cartmodel = mongoose.model("Carts", Cart, "Carts")
app.post("/api/cart", upload.none(), async (req, res) => {
    const result = await Cartmodel({
        Productname: req.body.proname,
        Productimage: req.body.pic,
        Price: req.body.price,
        quantity: req.body.qty

    })
    if (result) {
        const response = await result.save()
        if (response) {
            res.send({ statuscode: 1, msg: "cart post success" })
        }
        else {
            res.send({ statuscode: 0, msg: "error in cart " })
        }
    }
})
