const mongoose = require("mongoose")  //connect all packages
const cors = require("cors")        //connect all packages
const express = require("express")  //connect all packages
const multer = require("multer")

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
            Password: req.body.password
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
    if (result) {
        if (result.Password === req.body.pass) {
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
    console.log(result)
    if (result.length > 0) {
        return res.send({ statuscode: 1, data: result })
    }
    return res.send({ statuscode: 0 })
})

