module.exports = {
    products : (req, res) => res.render('products'),
    detail : (req, res) => res.render('productDetail'),
    cart : (req, res) => res.render('productCart')
}