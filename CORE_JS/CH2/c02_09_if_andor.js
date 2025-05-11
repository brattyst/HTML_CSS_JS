//let result = condition ? value1 : value2;

// let accessAllowed = age > 18 ? true : false;

// let age = prompt("age?", 18);

// // 다중 '?'
// let message =
//   age < 3
//     ? "아기야 안녕"
//     : age < 18
//     ? "안녕"
//     : age < 100
//     ? "Welcome"
//     : "아주 나이가 많으시거나, 나이가 아닌 값을 입력하셨군요!";
//Q1
// let result = prompt("자바스크립트의 공식이름은 뭘까요");

// if (result == "ECMAScript") {
//   alert("정답");
// } else {
//   alert("오답");
// }
//Q2
// 'use strict'
// let a = 1;
// let b = 2;
// let result = a + b < 4 ? "미만" : "이상";

// let message =
//   login == "직원"
//     ? "안녕하세요"
//     : login == "임원"
//     ? "환영합니다"
//     : login == ""
//     ? "로그인이 필요합니다"
//     : "";

//Q2
// if (age >= 14 && age <= 90)

//Q3
// if (!(age>=14 && age<=90))
// if (age <14 || age > 90)

//Q5

// "use strict";
let user = prompt(`Who's there?`, "");

if (user == "Admin") {
  pw = prompt("Password?", "");

  if (pw == "TheMaster") {
    alert("welcome!");
  } else if (pw == null || user == "") {
    alert("canceled");
  } else {
    alert("Wrong PW");
  }
} else if (user == null || user == "") {
  alert("Canceled");
} else {
  alert(`I don't know you`);
}
