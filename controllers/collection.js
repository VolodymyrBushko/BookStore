module.exports = {

  collection(req, res) {
    res.render('collection', {
      isCollection: true
    });
  }

}
