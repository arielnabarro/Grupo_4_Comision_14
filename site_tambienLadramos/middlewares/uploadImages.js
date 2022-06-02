const multer = require('multer');
const path = require('path');

/* MULTER */
const storage = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/alimento-balanceado')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage
});

const storage_users = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,'public/images/avatars')
    },
    filename : (req,file,callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload_users = multer({
    storage_users
})

module.exports = upload, upload_users;


