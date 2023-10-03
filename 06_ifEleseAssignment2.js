console.log(`================================== By Using Or Logical Operator=================================`);
console.log(`-------------------------------------- * TCS Selection Criteria * --------------------------------------`);
var interviewResult=function(gradScore,hscScore,sscScore,name){
if (gradScore>=70||hscScore>=80||sscScore>=90) {
    console.log(`Congrats "  ${name}  " You Are Eligible for TCS Interview`);
} else {
    console.log(`Sorry "  ${name}  " You Are Not Eligible for TCS Interview`);
}
console.log(`---------------------------------------------------------------------------`);

}
interviewResult( 80, 86, 90,"Vishal D");
interviewResult(85,88,92,"Vishakha K");
interviewResult(70, 65, 55,"Harsh D");
interviewResult(60, 79, 88,"Prutvi G")
console.log(`================================================================================================`);
