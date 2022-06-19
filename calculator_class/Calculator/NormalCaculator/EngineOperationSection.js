const { Section } = require('./Section.js');

// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
class EngineOperationSection extends Section {
    constructor(){}
    numbers 
    setNumber(){}
    doOperation(){}
    operate(){}
}

// 연산 메서드 묶어놓는 곳 
let engineOperations = {
    root: function (inputNumber) {
        console.log(inputNumber + "에 대한 루트 연산을 실행합니다");
    },
    pie: function (inputNumber) {
        console.log(inputNumber + "에 대한 파이 연산을 실행합니다");
    },
    factorial: function (inputNumber) {
        console.log(inputNumber + "에 대한 팩토리얼 연산을 실행합니다");
    },
    absolute: function (inputNumber) {
        console.log(inputNumber + "에 대한 절댓값 연산을 실행합니다");
    },
    logN: function (inputNumber) {
        console.log(inputNumber + "에 대한 log 연산을 실행합니다");
    },
};


module.exports={EngineOperationSection}