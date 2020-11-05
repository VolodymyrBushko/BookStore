module.exports = {

  cart(req, res) {
    res.render('cart', {
      isCart: true
    });
  }

}
