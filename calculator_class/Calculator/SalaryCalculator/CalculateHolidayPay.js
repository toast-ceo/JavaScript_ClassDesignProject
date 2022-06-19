const{CaculateSection } = require('./CaculateSection.js');


// CaculateSection의 calculate() 메서드 재정의 
class CalculateHolidayPay extends CaculateSection{
    calculate();
}


module.exports = {CalculateHolidayPay}