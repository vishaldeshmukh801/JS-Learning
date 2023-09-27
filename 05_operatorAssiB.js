console.log(`============================================= Step-01 ==============================================`);
function greaterNumber(num1,num2) {
    console.log(`Given Values Are ==>> ${num1}, ${num2}`);
var result=num1>num2? `${num1} is Greater`: `${num2} is Greater`;
console.log(result);
console.log(`-----------------------------------------------------------------------------`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`============================================== Step-02 ====================================================`);

function isEvenOrOdd(num) {
    console.log(`Given Number Is ==>> ${num}`);
    var result=num%2==0? " Even Number": "Odd Number";
    return result;

}
var result=isEvenOrOdd(29);
console.log(result);
console.log(`---------------------------------------------------------------`);
var result=isEvenOrOdd(44);
console.log(result);
console.log(`---------------------------------------------------------------`);
var result=isEvenOrOdd(0);
console.log(result);
console.log(`---------------------------------------------------------------`);
var result=isEvenOrOdd(101);
console.log(result);
console.log(`================================================== Step-03 ====================================================`);

function wordLength(arg) {
    console.log(`Given Word Is ==>> ${arg}`);
    var result=arg.length;
    var result=arg.length%2==0? "Even Length": "Odd Length";
    return result;
    
}
var result=wordLength("JavaScript");
console.log(result);
console.log(`--------------------------------------------------------------------------`);
var result=wordLength("developer");
console.log(result);
console.log(`--------------------------------------------------------------------------`);
var result=wordLength("Google")
console.log(result);
console.log(`======================================================== * END * ======================================================`);