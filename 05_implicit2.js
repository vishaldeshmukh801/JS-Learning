console.log(`============================================ * Implicit String Conversion to Number *  ======================================`);
var result="4"-"2";
console.log(`result of "4"-"2" ==>> ${result}`);
console.log(`Type of ==>> ${typeof result}`);
console.log(`Ans ==> In above expression both string values are converted into number internally and its result is ==>> ${result} this is called as implicit string conversion to number and its data type is ==>> number.
` );
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
var result="4"*2;
console.log(`result of "4"*2 ==>> ${result}`);
console.log(`Type of ==>> ${typeof result}`);
console.log(`Ans ==> In above expression "4"string values are converted into number internally and its result is ==>>${result} this is called as implicit string conversion to number and its data type is ==>> number.
` );
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
var result="4"/2;
console.log(`result of "4"/2 ==>> ${result}`);
console.log(`Type of ==>> ${typeof result}`);
console.log(`Ans ==> In above expression "4"string values are converted into number internally and its result is ==>>${result} this is called as implicit string conversion to number and its data type is ==>> number.
` );
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`!! When Undefined used with any Number,String,Boolean It gives ==>> || NaN || output.!!`);
console.log(`============================================================== * Explicit Conversion * ==============================================`);

var output=Number("20");
console.log(`Converting "20" string to number ==>> ${output} `);
console.log(`Its Data Type ==>> ${typeof output}`);
console.log(`In above expression by using Number() Explicit conversion we converted string to number`);
console.log(`------------------------------------------------------------------------------------------------------------------`);
var output= Number("hi");
console.log(`Converting "hi" string to number ==>> ${output} `);
console.log(`Its Data Type ==>> ${typeof output}`);
console.log(`If String has invalid number then it will give NaN output.`);
console.log(`------------------------------------------------------------------------------------------------------------------`);

