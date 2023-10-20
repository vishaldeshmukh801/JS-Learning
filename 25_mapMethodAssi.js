console.log(`================================================ Assignment-01 ==========================================`);
const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given Array Is =====>>>>> [${arrayNumber}]`);
console.log(`-------------------------------------------------------------------------------------------`);
const newArray=arrayNumber.map((element)=>{
return element+10;


})
console.log(`After Adding "10" into each element =====>>>>> ${newArray}`);
console.log(`---------------------------------------------------------------------------------------------`);
const cubeArray=arrayNumber.map((cube)=>{
return cube*cube*cube;

});
console.log(`Cube Of Each Element  =====>>>>> ${cubeArray}`);
console.log(`---------------------------------------------------------------------------------------------`);
const addIndexArray=arrayNumber.map((element,index)=>{
return element+index;

})
console.log(`Added Index Value into Its Corresponding Element===>>> ${addIndexArray}`);
console.log(`====================================================== END ==========================================`);
