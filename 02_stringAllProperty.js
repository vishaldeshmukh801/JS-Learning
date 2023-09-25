var string="   Work hard in silence lets your success noise more  ";
console.log(`Given sentence Is ==> ${string}`);
var result= typeof string;
console.log(`Type of Data ==> ${result}`);
console.log(`--------------------------------------------------`);
// ------------To find total length of line ----------------------
var result1= string.length;
console.log(`Length of string is==> ${result1}`);
console.log(`------------------------------------------------`);
// ------------------trim extra spaces at start and end-------------------
var result2=string.trim();
console.log(`removing extra spaces==> ${result2}`);
console.log(`---------------------------------------------------`);
// ----------------length of line or sentence after trim---------------------
var result3=result2.length;
console.log(`length of string after trim ${result3}`); 
console.log(`----------------------------------------------------`);
// ---------------To find out character at 0 th index--------------------
var result4=result2.charAt(0);
console.log(`character at 0th index is==>${result4}`);
console.log(`-------------------------------------------------`);
// ----------------length of extra spaces removed----------------------
var result5=string.length-result2.length;
console.log(`total extra spaces removed==> ${result5}`);
console.log(`-------------------------------------------------`);
// --------------------To find character at any index value------------------
var result6=result2.charAt(32);
console.log(`charactor at 32 index is ==>${result6}`);
console.log(`----------------------------------------------------`);
// -----------------For spliting words by coma--------------------
var result7=result2.split(" ");
console.log(`split by using coma===> ${result7}`);
console.log(`-----------------------------------------------------`);
// ----------------Finding out index at word------------------------
var result8=result2.indexOf("noise");
console.log(`index of word noise==>> ${result8}`);
console.log(`-----------------------------------------------------`);
// ----------------taking slice from any index value------------------
var result9=result2.slice(21);
console.log(`slice after 21th index is==> ${result9}`);
console.log(`----------------------------------------------------`);
// ---------------Checking is string ends with any word or not----------------------
var result10=result2.endsWith("more");
console.log(`is string ends with more==>${result10}`);
console.log(`----------------------------------------------------`);
// ---------------Checking is string starts with any word or not----------------------
var result11=result2.startsWith("hard");
console.log(`is string start with hard==>${result11}`);
console.log(`----------------------------------------------------`);
// ------------------Checking is string include any word or not--------------------
var result12=result2.includes("lets");
console.log(`is string include lets==> ${result12}`);
console.log(`---------------------------------------------------`);
// ------------------Replacing any word by other word---------------
var result13=result2.replace("Work","Happy");
console.log(`replacing word work with happy==>${result13}`);
console.log(`----------------------------------------------------`);
//       ------------------- taking slice from any index to another next index---------------------
var result14=result2.slice(5,13);
console.log(`slicing word from 5 to 13 ${result14}`);
console.log(`------------------------------------------------------`);
// --------------------converting into upper case-----------------------
var result15=result2.toUpperCase();
console.log(`total string in upper case==> ${result15}`);
console.log(`------------------------------------------------------`);
// -------------------converting into lover case-----------------------
var result16=result2.toLocaleLowerCase();
console.log(`total string in lower case ==>${result16}`);
console.log(`-------------------------------------------------------`);
// ---------------------Searching any word available or not---------------------------
var result17=result2.search("y");
console.log(`search word index your==>>${result17}`);
console.log(`----------------===================== END ==============---------------------`);
