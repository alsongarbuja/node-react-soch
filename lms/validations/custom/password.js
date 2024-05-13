const password = (value, helper) => {
  if (value.length < 8) {
    return helper.message('Password must be at least 8 characters long');
  }
  if (!value.match(/\d/)) {
    return helper.message('Password must contain at least one digit');
  }
  if (!value.match(/[a-z]/)) {
    return helper.message('Password must contain at least one lowercase letter');
  }
  if (!value.match(/[A-Z]/)) {
    return helper.message('Password must contain at least one uppercase letter');
  }
  return value;
}

module.exports = password;