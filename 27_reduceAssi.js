console.log(`==================================================== Assignment-01 (Reduce Method)=======================================`);
const array_number=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array ===>>> [${array_number}]`);
console.log(`----------------------------------------------------------------------`);
let sum=0
for (const element of array_number) {
    sum= sum+element
}
console.log(`Sum of Given Array By Using Traditional For Loop ==>> ${sum}`);
console.log(`----------------------------------------------------------------------`);
const arraySum=array_number.reduce((runingTotal,value)=>{
return runingTotal+value;
})
console.log(`Sum of Given Array By Using Reduce Method ==>> ${sum}`);
console.log(`---------------------------------------------------- STEP-02 --------------------------------------`);
const arrayMultiply=array_number.filter((value)=>{
return value%5==0;
})
console.log(`Element Which Are Multiple Of "5" ===>>> ${arrayMultiply}`);
console.log(`-----------------------------------------------------------------`);
const arrayMultiple5=arrayMultiply.reduce((runingvalue,value1)=>{
    return runingvalue+value1
})
console.log(`Sum Of Number Multiple Of "5" Using Reduce Method ===>>> ${arrayMultiple5}`);
console.log(`========================================================== END =============================================`);
