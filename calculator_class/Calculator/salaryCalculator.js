const { Calculator } = require('../Calculator/Calculator.js');
const {CalculateTimeDay } =  require('./SalaryCalculator/CalculateTimeDay.js');
const {CalculateTax } =  require('./SalaryCalculator/CalculateTax.js');
const {CalculateHolidayPay } =  require('./SalaryCalculator/CalculateHolidayPay.js');


// 퍼사드 메서드 패턴.
// 각 메서드의 알고리즘에 대하여 각 파일에 주석을 달아 설명하겠습니다!


class CalculateSalary {
    constructor(){}
    timeDayTaxCaculate(){
        /**
         * CalculateTimeDay.calculate()
         * CalculateTax.calculate()
         * 위의메서드를 묶는 메서드
         */
    }
    timeDayHolydayCaculate(){
        /**
         * CalculateTimeDay.calculate()
         * CalculateHolidayPay.calculate()
         * 위의메서드를 묶는 메서드
         */
    }
    timeDayHolydayTaxCaculate(){
        /**
         * CalculateTimeDay.calculate()
         * CalculateTax.calculate()
         * CalculateHolidayPay.calculate()
         * 위의메서드를 묶는 메서드
         */
    }
}


class SalaryCalculator extends Calculator {
    constructor() { }
    introduce() {}
    calculate() {
        /**
         * CalculateSalary 클래스의 의 메서드를 사용
         */
    }
    result() {}
}


module.exports = { SalaryCalculator };