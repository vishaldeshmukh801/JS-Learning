console.log(`================================================== Find Out Even & Odd Number From Given Values || IfElse ||  =======================================`);
function evenOdd(value) {
    if (value%2===0 ) {
        console.log(`Given Value ${value} Is  Even Value `);
    } else {
        console.log(`Given Value ${value} Is Odd Value`);

    }
    console.log(`--------------------------------------------------------------------------------------`);
}
evenOdd(2)
evenOdd(45)
evenOdd(13)
evenOdd(0)
evenOdd(8)
evenOdd(70)
console.log(`======================================== Find Out Greater Number From Given 3 Numbers || IfElse || =====================================`);
function greater(value1,value2,value3) {
    if (value1>value2&value1>value3) {
        console.log(`From Given Values ${value1} ${value2}  ${value3} ===>> ${value1} Is Greater Number` );
    } else {
        if (value2>value3&value2>value1) {
            console.log(`From Given Values ${value1} ${value2}  ${value3} ===>> ${value2} Is Greater Number` );

        } else {
            console.log(`From Given Values ${value1} ${value2}  ${value3} ===>> ${value3} Is Greater Number` );

        }
    }
    console.log(`---------------------------------------------------------------------------------------------------------------`);
}
greater(56,70,80);
greater( -20, -90, 0)
greater( -40, 10,37)
greater( 40, 141,137)
greater( 120, 110,177)
console.log(`================================================================ END ===========================================================`);


