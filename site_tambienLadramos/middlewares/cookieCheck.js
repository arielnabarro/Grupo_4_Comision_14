module.exports = (req,res,next) =>{
    if(req.cookies.usertambienLadramos){
        req.session.userLogin = req.cookies.usertambienLadramos
    }
    next()
}