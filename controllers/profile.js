module.exports = {

  profile(req, res) {
    res.render('profile', {
      isProfile: true
    });
  }

}
