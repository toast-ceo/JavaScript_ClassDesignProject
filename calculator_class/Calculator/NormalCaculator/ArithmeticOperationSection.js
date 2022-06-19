const { Section } = require('./Section.js');


// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
class ArithmeticOperationSection extends Section {
    constructor(){}
    numbers 
    setNumber(){}
    doOperation(){}
    operate(){}
}

// 연산 메서드 묶어놓는 곳 
let arithmeticOperations = {
    plus: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 덧셈 연산을 실행합니다");
    },
    minus: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 마이너스 연산을 실행합니다");
    },
    multiply: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 곱셈 연산을 실행합니다");
    },
    divide: function (inputNumbers) {
        console.log(inputNumbers + "에 대한 나눗셈 연산을 실행합니다");
    },
    rest: function (inputNumber) {
        console.log(inputNumber + "에 대한 나머지 연산을 실행합니다");
    },
};

module.exports={ArithmeticOperationSection}