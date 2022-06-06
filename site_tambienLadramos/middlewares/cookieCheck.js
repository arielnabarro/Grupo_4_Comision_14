module.exports = (req,res,next) =>{
    if(req.cookies.usertambienLadramos){
        req.session.userLogin = req.cookies.usertambienLadramos
    }
    console.log('estas cokeado ',req.session.userLogin)
    next()
}