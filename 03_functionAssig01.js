console.log("================================Step1================================");


console.log("=============Functions with no argument and no return type==============");

function country() {
    console.log("****************  I Love Bharat  ******************");
    
}
country();

function thought() {
    console.log("**************  Hard work beats talent when talent doesn't work hard  *************");
    
}
thought();
console.log("=================================Step-2================================");

function personalDetails(firstName,lastName,collegeName) {
    console.log("First Name=>",firstName);
    console.log("Last Name =>",lastName);
    console.log("My College Name =>",collegeName);

    
}
personalDetails("Vishal","Deshmukh","Sinhagad college");

console.log("=================================Step-3================================");
function swap(arg1,arg2) {
    console.log("Before Swap==>",arg1,arg2);
    
 temp=arg1
arg1=arg2;
arg2=temp
console.log("After Swap==>",arg1,arg2);
console.log(`------------------------------------------------------------------`);

}
swap("Krishna","Radha");
swap("Ram","Sita");
swap("Virat","Anushka");
swap(1000,2000);
console.log("==================================Step-4=================================");
function addThreeValues(add1,add2,add3) {
    console.log("Values Are",add1,add2,add3);
    var result=add1+add2+add3
    return result

    
}
var res=addThreeValues(10.23,600,40);
console.log("Result of Addition is=",res);
var res=addThreeValues("Hello","Good","Morning");
console.log("Result of Addition is=",res);
console.log(`================================END======================================`);
