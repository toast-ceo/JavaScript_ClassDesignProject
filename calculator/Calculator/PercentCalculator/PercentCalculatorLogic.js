// 템플릿 패턴
function PercentCalculatorLogic() {
    this.value = null;
    this.typeValue = null;
    this.result = null;
    // 기준 값을 받는 메서드
    valueInput = function () {
        console.log("PercentCalculateLogic의 valueInput메서드 입니다.");
    };
    // 해당 타입마다의 특별한 값을 받는 메서드
    PercentCalculatorLogic.prototype.typeValueInput = function () {
        console.log("PercentCalculateLogic의 typeValueInput메서드 입니다.")
    };
    // 해당 입력 값을 계산해주는 메서드 
    PercentCalculatorLogic.prototype.calculate = function () {
        console.log("PercentCalculateLogic의 calculate메서드 입니다.")
    };
    PercentCalculatorLogic.prototype.doLogic = function () {
        valueInput();
        this.typeValueInput();
        this.calculate();
    }
};

module.exports = {PercentCalculatorLogic}