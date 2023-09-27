console.log(`========================================= Assignment-01 =================================================`);
function squareOfWordLength(str) {
    console.log(`Given Word Is ==>> ${str}`);
    var result=str.length;
    console.log(`Length Of Given Word Is ==>> ${result}`);
    var result1=result*result;
    return result1;
}
var result1=squareOfWordLength("JavaScript");
console.log(`Length  Square Of Given Word ==>> ${result1} `);
console.log(`==============================================================================`);

var result1=squareOfWordLength("Google Chrome");
console.log(`Length  Square Of Given Word ==>> ${result1} `);
console.log(`==============================================================================`);
var result1=squareOfWordLength("Developer Smart");
console.log(`Length  Square Of Given Word ==>> ${result1} `);
console.log(`============================================== * Step-02 * ===============================================`);

function givenString() {
  
    var string="I am Angular Developer";
    console.log(`Given String Is ==>> ${string} `);
    var stringLength=string.length;
    console.log(`Length of Given String Is ==>> ${stringLength}`);
    var splitString=string.split(" ");
    console.log(`Words In Given String ==>> ${splitString}`);
    var wordLength =splitString.length;
    console.log(`Total Number Of Word In Given String ==>> ${wordLength}`);
    console.log(`------------------------------------   Step 2.1  -----------------------------------------`);
    var divideString=stringLength/wordLength;
    console.log(`Output After Dividing String Length By  Number of Words  ==>> ${divideString}`);
    console.log(`---------------------------------------  Step 2.2  --------------------------------------`);
    var multiply=stringLength*wordLength;
    console.log(`Output After Multiplying String Length By Number of Words ==>> ${multiply}`);
}
givenString()
console.log(`====================================================== * END * ====================================================`);