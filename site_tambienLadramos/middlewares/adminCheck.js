module.exports = (req,res,next) => {
    if(req.session && req.session.userLogin.rol === 1){
        next()
        
        }else{
            res.redirect('/')
        }
}