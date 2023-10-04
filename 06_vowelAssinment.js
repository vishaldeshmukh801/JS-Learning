console.log(`==================================================== Step - 01 ================================================ `);
function vowel(str) {
    var add=0;
    for (let index = 0; index <=str.length-1; index++) {
        var output=str.charAt(index);
        if (output== "a" ||output== "e" ||output== "i" || output== "o" || output=="u" ||output== "A" ||output== "E" ||output== "I" || output== "O" || output=="U"  ) {
             add=add+1;
        
        }
        
    }
    console.log(` Total Number Of Vowel in given string ==> ${add}`);
}
vowel("I am very good IT Developer")
console.log(`----------------------------------------------- Step - 02 ------------------------------------------`);
sum=0;
for (let index = 1; index <=5; index++) {
    sum= sum+index*index*index;
    
}
 console.log(`Sum Of Cube Of Given Number ==>> ${sum}`);
 console.log(`------------------------------------------------ Step - 03 ----------------------------------------`);
 function oddPositionChar(arg) {
    var result=""
    console.log(`Given String Is ==>>  "${arg}"`);
    for (let index = 0; index <=arg.length-1; index++) {
        
        if (index%2!=0 && arg.charAt(index)!=" ") {
          var result= result+arg.charAt(index)+" "
        }
    }
    console.log(`Odd Position Characters In Given String ==>>  ${result} `);
   
console.log(`---------------------------------------------------------------------------------------------------`);
 }
 oddPositionChar("Hard work always pays back");
 oddPositionChar("Soon I will be UI IT Champ")
 console.log(`===================================================== * END * ======================================`);