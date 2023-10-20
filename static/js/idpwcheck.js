function idCheck(id) {
  upper = false; // 대문자
  rower = false; // 소문자

  for (let i = 0; i < id.langth; i++) {
    code = id.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      upper = true; //대문자 true 반환
    } else if (code >= 97 && code <= 122) {
      rower = true; //소문자 true 반환
    }
  }
  return upper && lower; // 대소문자가 모두 포함되면 true, 아니면 false
}

module.exports = idCheck;
