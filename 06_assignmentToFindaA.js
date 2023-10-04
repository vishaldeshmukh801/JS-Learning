console.log(`============================================== Assignment 01 ========================================`);
function countCharA(value) {
    console.log(`Given String Is ===>> ${value}`);
    var str=value;
    var count=0;
    for (let index = 0; index <=str.length-1; index++) {
        var char = str.charAt(index);
        if (char=="a"|| char=="A") {
            count=count+1;
        
        }
        
    }
     console.log(`Total Number Of "A" and "a" Character Available in Given String ==>> ${count}`);
     console.log(`--------------------------------------------------------------------------------------`);
}
countCharA("I AM Learning Javascript,The Language of internet ")

countCharA("My favorite movie is LAggAn")
countCharA("Cities of desire are not found by thinking. To reach the destination we have to walk !")
console.log(`============================================== * END * ==============================================`);