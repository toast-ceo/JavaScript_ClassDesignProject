const { Calculator } = require('../Calculator/Calculator.js');
const {GradeCalculationUI} = require('./GradeCalculator/GradeCalculationUI');


class GradeCalculator extends Calculator {
    constructor() { }
    introduce() {}
    calculate() { /*GradeCalculationUI.calculate()를 사용*/ } 
    result() {/*GradeCalculationUI.result()를 사용*/  }
}

module.exports = { GradeCalculator }