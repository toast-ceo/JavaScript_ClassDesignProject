const { Section } = require('./Section.js');


// 커멘드 패턴 -> 요청을 객체속에 캡슐화 해주기 위해 
class LogicalOperationSection extends Section {
    constructor(){}
    numbers 
    setNumber(){}
    doOperation(){}
    operate(){}
}

// 컴퓨터 연산 메서드 묶어놓는 곳 
let logicalOperations = {
    and: function (inputBools) {
        console.log(inputBools + "에 대한 AND 연산을 실행합니다");
    },
    or: function (inputBools) {
        console.log(inputBools + "에 대한 OR 연산을 실행합니다");
    },
    xor: function (inputBools) {
        console.log(inputBools + "에 대한 XOR 연산을 실행합니다");
    },
    not: function (inputBool) {
        console.log(inputBool + "에 대한 NOT 연산을 실행합니다");
    },
    nand: function (inputBool) {
        console.log(inputBool + "에 대한 NAND 연산을 실행합니다");
    },
    nor: function (inputBool) {
        console.log(inputBool + "에 대한 NOR 연산을 실행합니다");
    },
};


module.exports={LogicalOperationSection}