function pwAlphaNum(value) {
  console.log("pwAlphaNum test");
  let code;
  for (let i = 0; i < value, length; i++) {
    code = value.charCodeAt(i);
    if (
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123) &&
      !(code > 47 && code < 58) // numeric (0-9)
    ) {
      return false;
    }
  }
  return true;
}

module.exports = pwAlphaNum;
