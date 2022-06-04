const multer = require('multer');
const path = require('path');

/* MULTER */
const storageFood = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'/public/images/Alimento-balanceado')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storageFood
});



module.exports = upload;


