const { Calculator } = require('./Calculator.js');

const { ArithmeticOperationSection } = require('./NormalCaculator/ArithmeticOperationSection.js');
const { EngineOperationSection } = require('./NormalCaculator/EngineOperationSection.js');
const { LogicalOperationSection } = require('./NormalCaculator/LogicalOperationSection.js');
const { DecimalOperationSection } = require('./NormalCaculator/DecimalOperationSection.js');
const { RecodeSection } = require('./NormalCaculator/RecodeSection.js');
const { LoadSection } = require('./NormalCaculator/LoadSection.js');

// Section을 묶어서 계산기를 생성해줄 수 있는 부분 
let makeCalculator = (function () {
/**
 * ArithmeticOperationSection
 * EngineOperationSection
 * LogicalOperationSection
 * DecimalOperationSection
 * RecodeSection
 * LoadSection
 * => 6개의 섹션 서브 클래스를 조합할 수 있게
 */

})();


class NormalCalculator extends Calculator {
    constructor() { }
    introduce() {}
    calculate() { /*makeCalculator를 사용*/}
    result() { }
}


module.exports = { NormalCalculator };