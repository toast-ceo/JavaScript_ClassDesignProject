const { Calculator } = require('../Calculator/Calculator.js');
const {GradeCalculationUI} = require('./GradeCalculator/GradeCalculationUI');

let GradeCalculator = new Calculator();
const gradeCalculationUI = new GradeCalculationUI();

// 소개
GradeCalculator.introduce = function () {
    console.log("학점 게산기를 선택하셨습니다!");
};


// 연산
GradeCalculator.calculate = function () {
    console.log("학점 계산기의 연산을 수행해주는 메서드입니다.");
    gradeCalculationUI.calculate();
}


GradeCalculator.result = function () {
    console.log("학점 계산기의 결과를 나타내주는 메서드입니다.");
    gradeCalculationUI.result();
}

module.exports = { GradeCalculator }