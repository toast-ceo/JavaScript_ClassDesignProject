const { GradeCalculation } = require('./GradeCalculation.js');
// 대리자 
let GradeCalculationUI = (function(){
    function GradeCalculationUI(){
        this.GradeCalculation = new GradeCalculation();
    }
    GradeCalculationUI.prototype.calculate = function(select){
        console.log("입력을 받아 원하는 메서드를 부르는 메서드 입니다.");
        // select ?  this.GradeCalculation.calculate() :  this.GradeCalculation.resultCalculate();        
        this.GradeCalculation.calculate();
        this.GradeCalculation.resultCalculate();
    };
    GradeCalculationUI.prototype.result = function(){
        console.log("학점 계산기 결과를 출력해주는 메서드 입니다.");
        console.log("이름 :" + this.GradeCalculation.username + " 학점: " +this.GradeCalculation.grade +" 시간 :"+ this.GradeCalculation.time);
    };
    return GradeCalculationUI;
})();


module.exports={GradeCalculationUI}
