// 프록시 패턴 
// 계산하는 법을 비공개 처리하기 위해 사용함 
let GradeCalculation = (function(){
    function GradeCalculation(){
        this.grade = null;
        this.time = null;
        this.username = null;
    };
    GradeCalculation.prototype.calculate = function(){
        console.log("학점을 계산해주는 메서드 입니다.");
    };
    GradeCalculation.prototype.resultCalculate = function(){
        console.log("학점을 모두 계산해주는 메서드 입니다.");

        // 예제 
        this.grade = 4.0;
        this.time = 15;
        this.username = "이삭";

        return this;
    };
    return GradeCalculation;
})();

module.exports={GradeCalculation}