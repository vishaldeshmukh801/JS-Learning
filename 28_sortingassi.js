console.log(`======================================================== Assignment-03 (Sorting) ================================================`);
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given Array Is ==>> [${arrayRollNumbers}]`);
console.log(`------------------------------------------- STEP-01 --------------------------------------`);
const result=arrayRollNumbers.reverse();
console.log(`Reversing Given Array As It Is =====>>>   [${result}] `);
console.log(`------------------------------------------- STEP-02 --------------------------------------`);
const sortArray=arrayRollNumbers.sort();
console.log(`Sorting Array Without Any Custom Logic ===>>  [${sortArray}]`);
console.log(`------------------------------------------- STEP-03 --------------------------------------`);
const newArray = arrayRollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(`Sorting Given Array In Ascending Order ====>> [${newArray}]`);
console.log(`------------------------------------------- STEP-04 --------------------------------------`);
const greatestNumber=newArray[newArray.length-1];
console.log(`Greatest Number From Given Array ====>>>  ${greatestNumber}`);
console.log(`------------------------------------------- STEP-05 --------------------------------------`);
console.log(`Smallest Number From Given Array ===>>> ${newArray[0]}`);
console.log(`------------------------------------------- STEP-06 --------------------------------------`);
arrayNumber = [...new Set(newArray)];
console.log(`After Removing Duplicate Element From Given Array ===>>> `);
console.log(arrayNumber);
console.log(`===================================================================== END =====================================================`);

