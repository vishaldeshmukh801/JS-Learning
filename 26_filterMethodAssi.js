console.log(`================================================= Assignment-03 (Filter) =======================================`);
const arrayNumber=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array ====>>> [${arrayNumber}]`);
console.log(`----------------------------------------------------------------------------------------`);
const arrayGreater=arrayNumber.filter((element)=>{
return element>50;

})
console.log(`Element Which Are Greater Than "50" ===>>>> ${arrayGreater}`);
console.log(`-----------------------------------------------------------------------------------------`);
const arrayEven=arrayNumber.filter((value)=>{
    return value%2==0;
})
console.log(`Element Which Are Even Numbers ====>>> ${arrayEven}`);
console.log(`-----------------------------------------------------------------------------------------`);
const arrayOdd=arrayNumber.filter((odd)=>{
return odd%2!=0;

})
console.log(`Element Which Are Odd Numbers ====>>> ${arrayOdd}`);
console.log(`-----------------------------------------------------------------------------------------`);
const arrayMultiple=arrayNumber.filter((multiplyValue)=>{
return multiplyValue%5==0;

})
console.log(`Element Which Are Multiple Of "5" Numbers ====>>> ${arrayMultiple}`);
console.log(`-------------------------------------------------------------------------------------------`);
const arrayBetween=arrayNumber.filter((num)=>{
return num >=20 && num<=50;

})
console.log(`Elements Which Are Between Number "20" and "50"===>>${arrayBetween}`);
console.log(`=========================================================== END ============================================`);
