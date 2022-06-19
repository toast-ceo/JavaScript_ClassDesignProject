const { Section } = require('./Section.js');


// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
class DecimalOperationSection extends Section {
    constructor(){}
    numbers 
    setNumber(){}
    doOperation(){}
    operate(){}
}

// 연산 메서드 묶어놓는 곳 
let decimalOperations = {
    bin: function (inputNumber) {
        console.log(inputNumber + "에 대한 2진법 변환 연산을 실행합니다");
    },
    oct: function (inputNumber) {
        console.log(inputNumber + "에 대한 8진법 변환 연산을 실행합니다");
    },
    dec: function (inputNumber) {
        console.log(inputNumber + "에 대한 10진법 변환 연산을 실행합니다");
    },
    hex: function (inputNumber) {
        console.log(inputNumber + "에 대한 16진법 변환 연산을 실행합니다");
    },
};


module.exports={DecimalOperationSection}