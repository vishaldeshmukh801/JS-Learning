console.log(`==================================== Step-01 ===========================================`);
var square=function(num){
    console.log(`Given Number Is ==>> ${num}`);
var result=num*num;
console.log(`Square of given Number ==>> ${result}`);
console.log(`-----------------------------------------------------------------`);
}
square(5)
square(6)
square(25)
square(100)
square(67.89)
square(59)
console.log(`2.Type of Given Function ==>> ${typeof square}`);
console.log(`===================================== Step-02 =========================================`);
var areaRectangle=function(length,width){
    console.log(`Given Length and width is==>> ${length } ,${width}`);
var result=length*width;
console.log(`Area Of Rectangle is ==>> ${result}`);
}
areaRectangle(499,917)
console.log(`===================================== Step-03 ==========================================`);
var swapValue=function(argu1,argu2){
console.log(`Value Before Swap is ==>> ${argu1},${argu2}`);
temp=argu1;
 value1=argu2;
 value2=temp;
console.log(`Value After Swap ==>> ${value1},${value2}`);
console.log(`----------------------------------------------------------------------`);
}
swapValue("Mahi","Raina");
swapValue(55,77);
swapValue("Ram","Krishna")
console.log(`========================================== Step-04 ============================================`);
var string=function(str){
    console.log(`Given String Is ==>> ${str}`);
    var result=str.length;
    console.log(`1) Total character available in String ==>> ${result} `);
    console.log(`----------------------------------------------------------`);
    var result1=str.charAt(6);
    console.log(`2) Character at "6" ==>>${result1}`);
    console.log(`----------------------------------------------------------`);
    var result2=str.charAt(11);
    console.log(`3) Character at "11" ==>>${result2}`);
    console.log(`----------------------------------------------------------`);
    var result3=str.charAt(str.length-1);
    console.log(`4) Character at last index==>>${result3}`);
    console.log(`----------------------------------------------------------`);
    var result4=str.charAt(0);
    console.log(`5) Character at First index==>>${result4}`);
    console.log(`----------------------------------------------------------`);
    var result5=str.charAt(str.length-3);
    console.log(`6) Third Last Character at given index==>>${result5}`);
    console.log(`----------------------------------------------------------`);
    var result6=str.split(" ");
    console.log(`7) Total words in given String ==>> ${result6.length}`);
    var result7=result6.length*result6.length;
    console.log(`8) Square of word length is ==>> ${result7}`);
    console.log(`=============================================== END =====================================`);
     




    




}
string("JS the most popular language of internet")