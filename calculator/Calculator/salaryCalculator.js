const { Calculator } = require('../Calculator/Calculator.js');
const {CalculateTimeDay } =  require('./SalaryCalculator/CalculateTimeDay.js');
const {CalculateTax } =  require('./SalaryCalculator/CalculateTax.js');
const {CalculateHolidayPay } =  require('./SalaryCalculator/CalculateHolidayPay.js');

var SalaryCalculator = new Calculator();

// 퍼사드 메서드 패턴.
// 각 메서드의 알고리즘에 대하여 각 파일에 주석을 달아 설명하겠습니다!


const CalculateSalary = (function () {
    function CalculateSalary() {
        this.timeDayCalculate = new CalculateTimeDay();
        this.taxCalculate = new CalculateTax();
        this.holidayPayCalculate = new CalculateHolidayPay();
    };
    
    CalculateSalary.prototype.timeDayTaxCaculate = function () {
        this.timeDayCalculate.calculate();
        this.taxCalculate.calculate();
    };
    CalculateSalary.prototype.timeDayHolydayCaculate = function () {
        this.timeDayCalculate.calculate();
        this.holidayPayCalculate.calculate();
    };
    CalculateSalary.prototype.timeDayHolydayTaxCaculate = function () {
        this.timeDayCalculate.calculate();
        this.holidayPayCalculate.calculate();
        this.taxCalculate.calculate();
    };
    return CalculateSalary;
})();



// 소개
SalaryCalculator.introduce = function () {
    console.log("시급 계산기를 선택하셨습니다!");
};


// 연산
SalaryCalculator.calculate = function () {
    this.CalculateSalary = new CalculateSalary();
    console.log("PercentCalculator의 calculate 메서드입니다.");
    // 퍼사드 패턴 사용부분 
    // 시급 + 세금 계산 
    // this.CalculateSalary.timeDayTaxCaculate();
    // // 시급 + 주휴수당 계산
    // this.CalculateSalary.timeDayHolydayCaculate();
    // 시급 + 주휴수당 + 세금 계산
    this.CalculateSalary.timeDayHolydayTaxCaculate();
};


SalaryCalculator.result = function () {
   console.log("SalaryCalculator의 result 메서드입니다.");
}

module.exports = { SalaryCalculator };