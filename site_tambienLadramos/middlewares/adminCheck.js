module.exports = (req,res,next) => {
    if(req.session.userLogin 
        && req.session.userLogin.rol === "admin"){
            const {name, email} = req.session.userLogin;
            return res.render('admin/adminProfile', {
                name,
                email
            })

            next()
        }else{
            res.redirect('/')
        }
}