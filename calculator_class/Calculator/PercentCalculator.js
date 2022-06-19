const { Calculator } = require('../Calculator/Calculator.js');
const { PercentCalculatorLogic } = require('./PercentCalculator/PercentCalculatorLogic.js');


// PercentCalculatorLogic 의 메서드를 각 계산기 로직의 방법에 따라 오버라이드 해준 부분
// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.

// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
class RatioCalculator extends PercentCalculatorLogic {
    constructor() { };
    typeValueInput() { };
}
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.
class InDecreaseCalculator extends PercentCalculatorLogic {
    constructor() { };
    typeValueInput() { };
}


// 비율에 관한 계산기의 숫자, 비율을 연산해주는 부분
// 비율에 관한 계산기의 숫자, 비율을 연산해주는 부분
class RatioNumCalculator extends RatioCalculator {
    constructor() { };
    calculate() { };
}
class RatioRateCalculator extends RatioCalculator {
    constructor() { };
    calculate() { };
}



// 증감에 관한 계산기의 숫자, 비율을 연산해주는 부분
class InDecreaseNumCalculator extends InDecreaseCalculator {
    constructor() { };
    calculate() { };
}
class InDecreaseRateCalculator extends InDecreaseCalculator {
    constructor() { };
    calculate() { };
}



class PercentCalculator extends Calculator {
    constructor() { }
    introduce() {}
    calculate() { 
    /* 
    RatioNumberCalculator.doLogic();
    RatioRateCalculator.doLogic();
    InDecreaseNumberCalculator.doLogic();
    InDecreaseRateCalculator.doLogic();
    ->위 클래스를 사용하는 메서드 
    */
}
    result() { }
}


module.exports = { PercentCalculator };