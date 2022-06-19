const { Calculator } = require('../Calculator/Calculator.js');
const { PercentCalculatorLogic } = require('./PercentCalculator/PercentCalculatorLogic.js');

let PercentCalculator = new Calculator();

// PercentCalculatorLogic 의 메서드를 각 계산기 로직의 방법에 따라 오버라이드 해준 부분
// RatioCalculator는 비율에 관한 계산기로써 값을 받아 일부값이나 해당 비율을 알려주는 계산기다.
// InDecreaseCalculator는 증감에 관한 계산기로써 값을 받아 증가값의 비율이나 변경 값알려주는 계산기다.

let RatioCalculator = new PercentCalculatorLogic();
let InDecreaseCalculator = new PercentCalculatorLogic();

RatioCalculator.typeValueInput = function () {
    console.log("PercentCalculateLogic의 typeValueInput를 재정의한 메서드입니다.");
};
InDecreaseCalculator.typeValueInput = function () {
    console.log("PercentCalculateLogic의 typeValueInput를 재정의한 메서드입니다.");
};


// 비율에 관한 계산기의 숫자, 비율을 연산해주는 부분
let RatioNumberCalculator = RatioCalculator;
let RatioRateCalculator = RatioCalculator;

RatioNumberCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};
RatioRateCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};


// 증감에 관한 계산기의 숫자, 비율을 연산해주는 부분
let InDecreaseNumberCalculator = InDecreaseCalculator;
let InDecreaseRateCalculator = InDecreaseCalculator;

InDecreaseNumberCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};
InDecreaseRateCalculator.calculate = function () {
    console.log("PercentCalculateLogic의 calculate를 재정의한 메서드입니다.");
};

// 소개
PercentCalculator.introduce = function () {
    console.log("퍼센트 계산기를 선택하셨습니다!");
};


// 연산
PercentCalculator.calculate = function () {
    console.log("퍼센트 계산기의 결과를 나타내는 calculate 메서드");
    // RatioNumberCalculator.doLogic();
    // RatioRateCalculator.doLogic();
    // InDecreaseNumberCalculator.doLogic();
    // InDecreaseRateCalculator.doLogic();
};


PercentCalculator.result = function () {
    console.log("PercentCalculator의 result 메서드입니다.");
}

module.exports = { PercentCalculator };