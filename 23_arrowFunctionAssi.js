console.log(`================================================= Assignment-01 ========================================`);
console.log(`------------------------------------------- STEP-01 -------------------------------------------`);
let arr=()=>{
    console.log(`"Good Morning,Today is Thursday"`);

}
arr();
console.log(`--------------------------------------------- Step-02 -----------------------------------------`);
let multiply=(n1,n2,n3=1)=>{
    console.log(`Given Values Are ==>>> ${n1},${n2},${n3}`);
let multiplication=n1*n2*n3;
console.log(`Multiplication Of Given values ===>>> ${multiplication}`);
console.log(`---------------------------------------------------------------------`);
}
multiply(5,5,2);
multiply(10,4);
console.log(`------------------------------------------------ Step-03 --------------------------------------`);
let add=(num1,num2,num3,num4,num5)=>{
    console.log("Given Values Are ==>>",num1,num2,num3,num4,num5);
let result=num1+num2+num3+num4+num5;
return result;
}
let result=add(100,100,200,349,756);
console.log(`Addition Of Given Numbers Is ===>>> ${result}`);
console.log(`----------------------------------------------------------`);
 result=add("I am ","learning ","ES6 ","features ","in depth");
console.log(`Addition Of Given String Is ===>>> ${result}`);
console.log(`     `);
console.log(`====================================================== END ============================================`);
