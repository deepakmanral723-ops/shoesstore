import multer = require("multer");

var pic;
const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../frontend/uploads")
    },
    filename: (req, file, cb) => {
        pic = Date.now() + "-" + file.originalname,
            cb(null, pic)
    }
})
const upload = multer({ storage: mystorage })