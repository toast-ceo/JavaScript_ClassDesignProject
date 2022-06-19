const { Section } = require('./Section.js');

let LoadSection = new Section();

LoadSection = (function () {
    // 생성자 
    function LoadSection() { }

    LoadSection.prototype.loadResult = function () {
        console.log("연산 결과 불러오기");
    };
    LoadSection.prototype.loadCalculationProcess = function () {
        console.log("연산 과정 불러오기");
    };
    LoadSection.prototype.operate = function () {
        this.loadResult();
        this.loadCalculationProcess();
    };
    return LoadSection;
})();


module.exports={LoadSection}