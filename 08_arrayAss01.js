let arrayNum=[22,11,44,55,77,33];
console.log(`====================================================== Step-01 =======================================`);
console.log(`Even Position Values Are As Follows ==>>`);
  let sum=0;
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    sum=sum+element;
if (index%2==0) {  
    console.log( element);
    
}
  
}
console.log(`====================================================== Step-02 ======================================== `);
console.log(`Sum Of Array [${arrayNum}] is ===>> ${sum} `);
console.log(`====================================================== Step-03 ========================================`);
console.log(`Before Adding Value "101" at end of given array i.e ===>> [${arrayNum}] `);
arrayNum.push(101);
console.log(`After Adding Value "101" at end of given array i.e ===>> [${arrayNum}] `);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`Before Adding Value "200" at Start of given array i.e ===>> [${arrayNum}] `);
arrayNum.unshift(200);
console.log(`After Adding Value "200" at Start of given array i.e ===>> [${arrayNum}] `);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Before Removing  Last element at end of given array i.e ===>> [${arrayNum}] `);
arrayNum.pop();
console.log(`After Removing  Last element at end of given array i.e ===>> [${arrayNum}] `);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Before Removing  First element at Start of given array i.e ===>> [${arrayNum}] `);
arrayNum.shift();
console.log(`After Removing  First element at Start of given array i.e ===>> [${arrayNum}] `);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`Given Array in Reverse Order ====>>>`);
for (let index =arrayNum.length-1; index >=0; index--) {
  const element = arrayNum[index];
  console.log(element);
  
}




console.log(`============================================================== END ================================================`);



 
