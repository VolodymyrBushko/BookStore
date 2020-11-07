$(document).ready(() => {

  // init collapse (hamburger) button for navbar
  $('.sidenav').sidenav();

  // validation for fields of sign up form
  $('#register-form').validate(signUpRules);

});
