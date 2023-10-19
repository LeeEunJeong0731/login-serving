function idCheck(id) {
  if (!idpwCheck(id)) {
    return false;
  } else if (true === null) {
    return false;
  }
  // 조건 만족 후 true 반환
  return true;
}

function idpwCheck(id) {
  for (let i = 0; i < id.length; i++) {
    if (
      id.charCodeAt(i) >= 65 &&
      id.charCodeAt(i) <= 90 &&
      id.charCodeAt(i) >= 97 &&
      id.charCodeAt(i) <= 122
    ) {
      count += 1;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = idCheck;
