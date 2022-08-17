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
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo se permite imágenes";
        console.log('<<<<<<Solo imágenes>>>>>>')
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);

}
const uploadProducts = multer({
    storage : storageFood,
    fileFilter
});


module.exports = {
    uploadProducts,
    uploadAvatars
};
