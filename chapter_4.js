// 101p, String 객체
// .length
let txt = "qwerasdf";
console.log("t len : ",txt.length);
// 8

/* 
    .indexOf() : 찾고자 하는 문자열에 시작하는 위치 리턴
    위치는 0부터 시작,  아래는 3을 리턴 
*/
console.log("t indexOf : ",txt.indexOf("ra"));
// 3

let doubleTxt = "qweaa_qweaa";
/* 
    .lastIndexOf() : 찾는 문자열이 2개 이상일때 
    마지막에 발견한 문자열에 index를 리턴
*/
console.log("dT_lastIndexOf : ",doubleTxt.lastIndexOf("aa"));
// 9

/*
    .slice(처음, 종료) : 문자열에서 해당하는 부분만 잘라내기
    파라미터를 1개 음수로 줄 경우 끝에서부터 읽는다
*/
console.log("slice : ",doubleTxt.slice(9,11));
console.log("slice - : ",doubleTxt.slice(-2));
// aa

/*
    .substring() : .slice() 와 동일,
    하지만 음수는 불가
*/
console.log("substring : ",doubleTxt.substring(9,11));
// a

/*
    .substr(p1,p2) : .slice() 와 비슷하지만,
    p1 인덱스 위치에서부터 p2까지가 아닌 p2크기만큼 문자열을 자른다.
*/
console.log("substr : ",doubleTxt.substr(9,2));
// a