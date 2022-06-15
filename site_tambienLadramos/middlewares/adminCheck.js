module.exports = (req,res,next) => {
    if(req.session && req.session.userLogin.rol == 'admin'){
        next()
        
        }else{
            res.redirect('/login')
        }
}