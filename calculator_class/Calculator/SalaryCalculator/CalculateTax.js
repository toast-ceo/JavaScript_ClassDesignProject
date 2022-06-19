const{CaculateSection } = require('./CaculateSection.js');


// CaculateSection의 calculate() 메서드 재정의 
class CalculateTax extends CaculateSection{
    calculate();
}

module.exports = {CalculateTax}