console.log(`======================================== Assignment-01 ===========================================`);
console.log(`------------------------------ * Step-01 * --------------------------`);
function maleMarriageEligibility(gender,age,boyName) {
   var result= gender=="Male"&age>=21 ? `Hey " ${boyName} " Congratulations You Are Eligible For Marriage !`  : `Sorry " ${boyName} " You Are Not Eligible For Marriage !`;
   return result
}
var result=maleMarriageEligibility("Male",25,"Bill Gate");
console.log(result);
console.log(`-------------------------------------------------------------`);
var result=maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(result);
console.log(`------------------------------------------------------------`);
var result=maleMarriageEligibility("Male",27,"Virat");
console.log(result);
console.log(`------------------------------------------------------------`);
var result=maleMarriageEligibility("Male",18,"Raj");
console.log(result);
console.log(`====================================== * Step-02 * ===============================================`);
function femaleMarriageEligibility(gender,age,girlName) {
    var result= gender=="female"&age>=18 ? `Hey " ${girlName} " Congratulations You Are Eligible For Marriage !` : `Sorry " ${girlName} " You Are Not Eligible For Marriage !`;
    return result
 }
 var result=femaleMarriageEligibility("female",16,"Jenifer");
 console.log(result);
 console.log(`-------------------------------------------------------------`);
 var result=femaleMarriageEligibility("female",27,"Malinda Gates");
 console.log(result);
 console.log(`-------------------------------------------------------------`);
 var result=femaleMarriageEligibility("female",17,"Anushka");
 console.log(result);
 console.log(`-------------------------------------------------------------`);
 var result=femaleMarriageEligibility("female",20,"Sita");
 console.log(result);
 console.log(`============================================= * END * ====================================================`);