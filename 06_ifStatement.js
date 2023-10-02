var girlAge = 19;
if (girlAge>=18) {
    console.log(`You could go inside office`);
    console.log(`Have you informed your parent`);
    console.log(`Signed.. Congrats!!!`);
}
console.log(`Daily life`);

var elonAge = 17;

// If age is greater than equal 18 then allow for vote else no.
if (elonAge>=18) {
    console.log(`Welcome.. Elon`);
    console.log(`Please let me mark your finger with ink`);
    console.log(`Please now vote`);
} else {
    console.log(`Yet you are not eligible for vote`);
    console.log(`Try next time please!`);
}
console.log(`==================`);
function age(argu) {
    var result=argu>=18?`you are eligible`:`you are not`;
    console.log(result);

}
age(25)
console.log(`===========================================================`);
var result=function(age){
    var output=+age
if (age<=0||age>=125||age==NaN||isNaN(output)) {
    console.log(`invalid data`);
    
} else {if (age<=18) {
    console.log(`you are not eligible`);
    
} else {
    console.log(`you are eligible`);
    
}
    
}


}
result(12);
result(-1);
result(19);
result(130);
result("given")