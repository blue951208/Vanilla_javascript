// 116p  Array
let food = ["라면","치킨","곱창","대창"];

/*
    .toString() : 배열안의 모든 문자를 ','로 결합 문자열로 리턴한다.
*/
console.log("food : ",food.toString());
// 라면,치킨,곱창,대창

/*
    .join(p1) : 배열안에 모든 문자를 지정한 파라미터로 결합 문자열로 리턴한다.
*/
console.log("join : ",food.join("-"))
// 라면-치킨-곱창-대창