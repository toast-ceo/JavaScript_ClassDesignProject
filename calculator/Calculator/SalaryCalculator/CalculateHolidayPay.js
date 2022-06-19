const{CaculateSection } = require('./CaculateSection.js');
let CalculateHolidayPay = new CaculateSection();


// 주휴수당 로직 -> 주휴수당을 추가해주는 로직입니다.
// 매개변수 wage(입력하고 싶은 주급의 값), 매개변수 weekTime(일주일 동안 일한시간을 나타내는 매개변수)와 매개변수 time를 받습니다.
// 그 후, wage += (weekTime/ 40) * 8 * time의 연산을 해주어 wage을 return 해줍니다.
CalculateHolidayPay.prototype.calculate = function () {
    console.log("holidayPayCalculate 메서드입니다.");
};


module.exports = {CalculateHolidayPay}