const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Length of Array is==>>${arrayNumbers.length}`);

console.log(`First Number is===>>${arrayNumbers[0]}`);
console.log(`Last number is==>>>${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`Third Last Number is==>>>${arrayNumbers[arrayNumbers.length-3]}`);
for (let index = 0; index < arrayNumbers.length; index++) {
   if (index%2==0) {

    const element = arrayNumbers[index];
    console.log(`Even Numbers Index ==>> ${element}`);
   }
    
    
}
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
 
     const element4 = arrayNumbers[index];
     console.log(`Odd Numbers Index  ${element4}`);
    }
     
     
 }