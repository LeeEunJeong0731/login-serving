const root = document.getElementById("root");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

const userId = root.children[0].children[0];
const password = root.children[0].children[1];
const password2 = root.children[0].children[2];
const email = root.children[0].children[3];

const idRegExp = /^[a-zA-z]$/;
//로그인 유효성 검사 소,대문자 또한 0-9까지 사용 할 수있다.
console.log("hi");
