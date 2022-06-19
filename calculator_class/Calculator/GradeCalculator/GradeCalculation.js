// 프록시 패턴 
// 계산하는 법을 비공개 처리하기 위해 사용함 

class GradeCalculation{
    constructor(){}
    // 변수
    grade
    time
    username
    // 메서드 
    calculate();
    resultCalculate();
}

module.exports={GradeCalculation}