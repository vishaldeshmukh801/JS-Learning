console.log(`=================================== * Implicit Conversions * =======================================`);

console.log(`------------------------------- STEP-01 -----------------------------------`);
var result= "3"+2;
console.log(`result of "3"+2 ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
var result="3"+true;
console.log(`result of "3"+true ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
var result="3"+undefined;
console.log(`result of "3"+undefined ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);

console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
var result="3"+null;
console.log(`result of "3"+null ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
console.log(`Ans ==>> In All above expressions value "2", "true", "undefined" ,"null"  is internally converted into "String" then concated both values is called implicit conversion to string and its type is "String" .`);

console.log(`============================================= * Implicit boolean  Conversion to Number * =============================================`);
var result="4"-true;
console.log(`result of "4"-true ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);
console.log(`Ans ==>> In above term 2 implicit conversions occurs at same time 1. "4" string value converted internally into number. 2.true boolean value converted into number (i.e true= 1)hence result is ==>> ${result}`);
console.log(`-----------------------------------------------------------------------------------------------------------------------------`);
var result=4+false;
console.log(`result of 4 + false ==>> ${result}`);
console.log(`Type of given values ==>> ${typeof result}`);
console.log(`In above expression "false" which has type boolean is internally converted into number(i.e false=0) then addition takes place hence result is ==>>${result}  it is called as Implicit boolean  Conversion to Number`);

console.log(`===================================================================== END ===============================================================`);