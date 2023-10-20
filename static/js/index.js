function idAlpha(value) {
  console.log("idAlpha test");
  let code;
  for (let i = 0; i < value.length; i++) {
    code = value.charCodeAt(i);
    if (
      !(code > 64 && code < 91) && // upper alpha( A - Z )
      !(code > 96 && code < 123)
      // lower alpha ( a - z )
    ) {
      return false;
    }
  }
}

//idpwcheck로 통합
