module.exports = {

  store(req, res) {
    res.render('store', {
      isStore: true
    });
  }

}
