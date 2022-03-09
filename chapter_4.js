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

/*
    .replace(p1,p2) : p1에 해당하는 문자열을 p2로 변경 처음위치 1번만
    +) 대소문자를 구분한다, 구분없이 하기 위해서는 정규식 사용
*/
let str = "Vanilla_Javascript_develop";
console.log("replace : ",str.replace("develop","Practice"));
// Vanilla_Javascript_Practice

/*
    /DEVELOP/i 에서 /~/ 는 찾고자 하는 문자열
    i 는 insentive의 약자로 대소문자를 구분하지 않는다는 의미.
*/  
console.log("replace_정규식-i : ",str.replace(/DEVELOP/i, "Practice"));
// Vanilla_Javascript_Practice

/*
    /~/g 에서 g는 문자열 전체에서 
    해당하는 모든 문자열을 대체문자열로변경
*/
let str2 = "Vanilla_Javascript_develop develop";
console.log("replace_정규식-g : ",str2.replace(/DEVELOP/gi, "Practice"));
// Vanilla_Javascript_Practice Practice

/*
    .toUpperCase() : 문자를 대문자로,
    .toLowerCase() : 문자를 소문자로
*/
let str3 = "hello_world";
console.log("uppercase : ",str3.toUpperCase());

/*
    .concat() : 문자열 합치기
*/
let txt1 = "txt1";
let txt2 = txt1.concat(" ","concat String");
console.log("txt2 : ",txt2);
// txt1 concat String

/*
    .trim() : 문자열 앞뒤 공백 제거
*/
let trim_txt = "   앞뒤 공백 문자열   ";
console.log("txt      : ",trim_txt);
console.log("txt_trim : ",trim_txt.trim());
// 앞뒤 공백 문자열

/*
    .padStart(p1,p2) : 첫번째 파라미터는 총 문자열 길이, 두번째 파라미터는 추가할 문자
                       지정한 문자열에서 남은 길이 만큼 추가할 문자로 채운다.(앞에)
    .padEnd(p1,p2)   : (뒤에)
*/
let pad_txt = "s";
console.log("padStart : ",pad_txt.padStart(4,"12"));
// 121s
console.log("padEnd   : ",pad_txt.padEnd(4,"12"));
// s121

/*
    .charAt(p1) : 파라미터 인덱스에 해당하는 문자 한개를 반환
*/
let chartAt_txt = "charAt_txt";
console.log("charAt-6 : ",chartAt_txt.charAt(6));
// _