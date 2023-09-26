console.log(`============================================ * Assignment-02 * ===============================================`);

var string="     Hey you are doing good, keep it up      ";
console.log(`Given String Is ===>> ${string}`);
var stringLength=string.length;
console.log(`Length of String ==>> ${stringLength}`);

console.log(`---------------------------------------------------------------------`);

var stringTrim=string.trim();
console.log(`String After Trim ==>> ${stringTrim}`);
var stringLengthAfter=stringTrim.length;
console.log(`Length of String After Trim ==> ${stringLengthAfter}`);

console.log(`---------------------------------------------------------------------`);

var stringRemoved=string.length-stringTrim.length;
console.log(`Total Number Of Spaces Removed ==>> ${stringRemoved}`);
console.log(`---------------------------------------------------------------------`);
var firstChar=stringTrim.charAt(0);
var lastChar=stringTrim.charAt(stringLengthAfter-1);
console.log(`First Character After Trim ==>> || ${firstChar} || , Last Character After Trim ==>> || ${lastChar} ||`);
console.log(`------------------------------------------------------------------------------------------`);
var stringSplit=stringTrim.split(" ")
console.log(`String After Split ==>> ${stringSplit}`);
var stringTotalWord=stringSplit.length;
console.log(`Total Word Available In String ==>>${stringTotalWord}`);
console.log(`-----------------------------------------------------------------------------------------`);
var stringSearch=stringTrim.search("good");
console.log(`Index of Word "good" is ==>> ${stringSearch}`);
console.log(`-----------------------------------------------------------------------------------------`);
var Substring=stringTrim.slice(22);
console.log(`Substring Starting From Index "22" is ==>> ${Substring}`);
console.log(`--------------------------------------------------------------------------------------------`);
var endsWith =stringTrim.endsWith("up");
console.log(`String Ends With "up" ==>> ${endsWith}`);
console.log(`--------------------------------------------------------------------------------------------`);
var startWith=stringTrim.startsWith("Hey");
console.log(`String Start With "Hey" ==>> ${startWith}`);
console.log(`=================================================== * End * =====================================================`);