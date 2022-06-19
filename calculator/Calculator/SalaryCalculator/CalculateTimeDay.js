const{CaculateSection } = require('./CaculateSection.js');
let CalculateTimeDay = new CaculateSection();


// 시간 + 일 수 로직 -> 시급과 일한 날을 받아주어 계산해주는 메서드입니다.
// 매개 변수 time(시급의 값을 넣어주는 매개변수)와 매개변수 day(일한 날을 입력받는 매개변수)를 받습니다.
// time * day의 연산을 해주어 값을 return 해준다.
CalculateTimeDay.prototype.calculate = function () {
    console.log("timeDayCalculate 메서드입니다.");
};

module.exports = {CalculateTimeDay}