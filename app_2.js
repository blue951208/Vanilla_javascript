// 89p, 함수에 주석 처리
// 함수 바로 윗줄에 /** 입력시 파라미터 개수 및 정보가 나온다.
/**
 * 
 * @param {*} p1 
 * @param {*} p2 
 * @returns 
 */
function hap(p1, p2) {
    console.log("test Function");
    return p1 + p2;
}

// 93p, Function 생성자 함수
let sum = new Function("p1","p2", "return p1 + p2;");

console.log("sum : ",sum(1,3));