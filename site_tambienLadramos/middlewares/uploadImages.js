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
    storage : avatars
})


const storageFood = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/alimento-balanceado')
        
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadProducts = multer({
    storage : storageFood
});


module.exports = {
    uploadProducts,
    uploadAvatars
};
