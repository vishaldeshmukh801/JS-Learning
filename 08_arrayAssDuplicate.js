console.log(`================================================= * Assignment To Find Duplicate Number From Array *=========================================`);



let num=[11,2,33,11,55,33,2,11,77,2,1,11,24,11];

let sum=0
for (let index = 0; index < num.length; index++) {
    const element = num[index];
 if (element==11) {
    console.log(`index of duplicate value "11" present in give array ===>> ${index}`);
    sum=sum+1;
 }
    
}
console.log(`--------------------------------------------------------------------------------`);
    console.log(`Total number of Times "11" present in given Array ==>> ${sum}`);
console.log(`================================================================= * END * =============================================================`);