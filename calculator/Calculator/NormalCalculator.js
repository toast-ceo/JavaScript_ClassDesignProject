const { Calculator } = require('./Calculator.js');

const { ArithmeticOperationSection } = require('./NormalCaculator/ArithmeticOperationSection.js');
const { EngineOperationSection } = require('./NormalCaculator/EngineOperationSection.js');
const { LogicalOperationSection } = require('./NormalCaculator/LogicalOperationSection.js');
const { DecimalOperationSection } = require('./NormalCaculator/DecimalOperationSection.js');
const { RecodeSection } = require('./NormalCaculator/RecodeSection.js');
const { LoadSection } = require('./NormalCaculator/LoadSection.js');

let NormalCalculator = new Calculator();

// Section을 묶어서 계산기를 생성해줄 수 있는 부분 
// 매개변수로 받아서 
let makeCalculator = (function () {
    this.logic = [];
    return {
        addRecode: function () {
            let operate = new RecodeSection();
            logic.push(operate);
            return this;
        },
        addLoad: function () {
            let operate = new LoadSection();
            logic.push(operate);
            return this;
        },
        addOperation(type){
            let operate = undefined;
            if(type =="Arithmetic"){
                operate = new ArithmeticOperationSection();
                logic.push(operate);
            } else if(type =="Engine"){
                operate = new EngineOperationSection();
                logic.push(operate);
            } else if(type =="Logical"){
                operate = new LogicalOperationSection();
                logic.push(operate);
            } else if(type =="Decimal"){
                operate = new DecimalOperationSection();
                logic.push(operate);
            } else {
                console.log("해당 타입이 없어요!")
            }
            return this;
        },
        build: function () {
            return logic;
        }
    }
})();

// 소개
NormalCalculator.introduce = function () {
    console.log("일반 계산기를 선택하셨습니다!");
};

// 값을 입력 받음 -> 연산
NormalCalculator.calculate = function () {
    console.log("NormalCalculator 의 calculate 메서드입니다.");

    // 예제 -> 사용자가 원하는 기능의 섹션들을 조합해서 생성할 수 있음
    let buildCalculator = makeCalculator
    .addOperation("Arithmetic")
    .addOperation("Engine")
    .addOperation("Logical")
    .addOperation("Decimal")
    .addRecode()
    .addLoad()
    .build();

    for(var section of buildCalculator){
        section.operate();
    }
};


NormalCalculator.result = function () {
    console.log("NormalCalculator 의 result 메서드입니다.");
}


module.exports = { NormalCalculator };