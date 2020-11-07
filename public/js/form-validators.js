// validation options
const options = {
  focusInvalid: true,
  debug: false,
  errorClass: 'invalid',
  errorElement: 'span',
  errorPlacement: function ($error, $element) {
    const name = $element.attr('name');
    $('#error-' + name).append($error);
  }
}

// validation rules for sign up form
const signUpRules = {
  rules: {
    'name': {
      required: true,
      minlength: 2,
      maxlength: 16
    },
    'email': {
      required: true,
      email: true
    },
    'password': {
      required: true,
      minlength: 6,
      maxlength: 16
    },
    'confirm-password': {
      required: true,
      equalTo: '#user-password'
    }
  },
  ...options
}

// validation rules for sign in form
const signInRules = {
  rules: {
    'email': {
      required: true,
      email: true
    },
    'password': {
      required: true,
      minlength: 6,
      maxlength: 16
    }
  },
  ...options
}
