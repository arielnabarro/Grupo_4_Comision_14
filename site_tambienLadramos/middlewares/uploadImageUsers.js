const multer = require('multer');
const path = require('path');

//aun no funciona en la vista

const avatars = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'../public/images/avatars')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadAvatars = multer({
    avatars
})

module.exports =  uploadAvatars;