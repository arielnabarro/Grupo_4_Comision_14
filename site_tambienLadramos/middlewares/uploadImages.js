const multer = require('multer');
const path = require('path');


const avatars = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/avatars')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadAvatars = multer({
    avatars
})


const storageFood = multer.diskStorage({
    destination : (req,file,callback) => {
        console.log('destination')
        callback(null,'/public/images/Alimento-balanceado')
        
    },
    filename : (req,file,callback) => {
        console.log('fil')
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storageFood
});


module.exports =  upload, uploadAvatars;