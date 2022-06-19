const{CaculateSection } = require('./CaculateSection.js');
let CalculateTax = new CaculateSection();


// 세금 계산 로직 -> 받는 월급에 세금을 떼는 로직에 대한 설명입니다
// 매개변수 wage(입력하고 싶은 월급의 값), tax(세금 계산을 위한 퍼센트)를 받습니다. 
// 그 후, wage * (100 - tax) 의 연산을 해주어 값을 return 해줍니다. 
CalculateTax.prototype.calculate = function () {
    console.log("taxCalculate 메서드입니다.");
};


module.exports = {CalculateTax}