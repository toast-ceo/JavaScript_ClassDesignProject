let CaculateSection = function() {
    func = function(){}
    func.calculate = function() {
        console.log("CaculateSection의 calculate메서드 입니다.");
    }
    return func;
};


module.exports = { CaculateSection };