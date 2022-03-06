// 브라우저 화면에 문자열이 보이도록 한다.
document.write("Vanilla JS 시작");

// 주석 처리
// 한줄은   //   (단축키 Ctrl + '/')
// 여러줄은 /**/ (단축키 Shift + Alt + '/')

// 58p
let person = {
    name: 'Son',
    age: 28,    
};
// Object 데이터 변경시
person["name"] = 'SonDon';
console.log("name2 : ",person["name"]);

person.name = 'SonDonHyun';
console.log("name3 : ",person.name);

// 변수에 데이터 타입 확인시
var type = typeof person;
console.log("type : ",type);

/*
    84p, for-in
    for-in 은 객체내 키 값의 수만큼 실행한다.
*/
for (const key in person) {
    console.log("key : ",key);
}

/*
    85p, for-of
    for-of 는 반복가능한 객체에서 사용(배열,문자열)
*/
const term = "Vanilla_Js";
for (const x of term) {
    console.log("x : ",x);
}
