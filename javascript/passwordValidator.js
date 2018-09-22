function validate(password) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/.test(password);
}

const pass = '000000679AD';
console.log(validate(pass));
