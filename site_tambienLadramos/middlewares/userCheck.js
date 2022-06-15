module.exports = (req,res,next) => {
    if(req.session && req.session.userLogin.rol == 'user'){
            next()
        }else{
            res.redirect('/users/register')
        }
}