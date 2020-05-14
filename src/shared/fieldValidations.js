const backgrounds = require('./backgrounds');

function validateName(value) {
  if (!value) {
    return 'validations.required';
  }

  if (value.length > 50) {
    return 'validations.nameLength';
  }

  return false;
}

function validateZip(value) {
  if (!value) {
    return 'validations.required';
  }

  if (value.length !== 5) {
    return 'validations.zipFormat';
  }

  return false;
}

function validatePhone(value) {
  if (!value) {
    return 'validations.required';
  }

  if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
    return 'validations.phoneFormat';
  }

  return false;
}

function validateEmail(value) {
  if (!value) {
    return 'validations.required';
  }

  if (!/\S+@\S+\.\S+/.test(value)) {
    return 'validations.emailFormat';
  }

  return false;
}

function validateCode(value) {
  if (!value) {
    return 'validations.required';
  }

  if (value.length > 50) {
    return 'validations.codeLength';
  }

  if (!(/^[a-zA-Z0-9-_]+$/.test(value))) {
    return 'validations.codeFormat';
  }

  return false;
}

function validateRequired(value) {
  if (!value) {
    return 'validations.required';
  }

  return false;
}

function validateTitle(value) {
  if (!value) {
    return 'validations.required';
  }

  if (value.length > 450) {
    return 'validations.titleLength';
  }

  return false;
}

function validateSubtitle(value) {
  if (!value) {
    return 'validations.required';
  }

  if (value.length > 2000) {
    return 'validations.subtitleLength';
  }

  return false;
}

function validateBackground(value) {
  if (!value) {
    return 'validations.required';
  }

  if (!backgrounds[value]) {
    return 'validations.required';
  }

  return false;
}

module.exports = {
  validateName,
  validateZip,
  validatePhone,
  validateEmail,
  validateCode,
  validateRequired,
  validateTitle,
  validateSubtitle,
  validateBackground,
}
