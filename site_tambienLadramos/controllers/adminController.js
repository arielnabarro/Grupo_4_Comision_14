const db = require('../database/models')

module.exports = { 

    adminAdd : (req, res) => {
        db.User.findByPk(req.session.userLogin.id, {
            include : ['rols'],
            where : {
                id_rol : 1
            }
        })
        .then(admin => {
            return res.render('admins/adminAdd', {
                admin
            })
        })
        .catch(error => console.log(error))	
    },

    storeAdmin: (req, res) => {
        const { name, last_name, email} = req.body;

        db.User.create({
            name : name,
            last_name : last_name,
            email : email,
            id_rol : 1
        })
        .then(() => {
            if(req.file)
            db.Avatar.create({
                name : req.file ? req.file.filename : 'Logo.png',
            })
            res.redirect('/')
        })
        .catch(error => console.log(error))
    }
}