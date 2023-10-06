const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Given Array Is [${arrayNumbers}]`);
console.log(`------------------------------------------------------------------------------`);

console.log(`Length of Given Array is==>>${arrayNumbers.length}`);
console.log(`------------------------------------------------------------------------------`);


console.log(`First Number In Given Array Is ===>>${arrayNumbers[0]}`);
console.log(`------------------------------------------------------------------------------`);

console.log(`Last number In Given Array Is ==>>>${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`------------------------------------------------------------------------------`);

console.log(`Third Last Number IN Given Array Is==>>>${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`------------------------------------------------------------------------------`);

let result=""
let sum=0;
for (const index in arrayNumbers) {
   if (index%2==0) {

      const element = arrayNumbers[index];
      result=result+ element+"  "
      sum=sum+element;
   
     }
}

console.log(`Even Numbers Index  Values Are==>>|${result}|`);

console.log(`------------------------------------------------------------------------------`);
let res=""
let add=0;
 for (const index in arrayNumbers) {
   if (index%2!=0) {
 
      const element2 = arrayNumbers[index];
      res=res+ element2+"  ";
      add=add+element2;
     }
 }
 console.log(`Odd Numbers Index ==>>|${res}|` );
 console.log(`------------------------------------------------------------------------------`);

 console.log(`Even Numbers Index Values Are ==>>|${result}|`);
 console.log(`Sum Of Even Numbers Index Values IS ==>>   ${sum} `);
 console.log(`-------------------------------------------------------------------------------`);
 console.log(`ODD Numbers Index Values Are ==>>|${res}|`);
 console.log(`Sum Of ODD Numbers Index Values IS ==>>   ${add} `);
 console.log(`---------------------------------------------------------------------------------`);
let add1=0;
 for (const index in arrayNumbers) {
   const element3 = arrayNumbers[index];
   add1=add1+element3;
 }
 console.log(`Sum Of All Elements From Array ==>> ${add1}`);
 console.log(`---------------------------------------------------------------------------------`);
 let output=""
 for (const index in arrayNumbers) {
   if ((arrayNumbers[index]) % 5 == 0 ) {
      const element4 = arrayNumbers[index];
      output=output+ element4+"  ";
   }

 }
 console.log(`Number Which Are Multiple By 5 ==>> ${output}`);

 console.log(`-----------------------------------------------------------------------------------`);
 console.log(`Is Number "115" Available In Given Array==>>${ arrayNumbers.includes(115)} `);
 console.log(`-----------------------------------------------------------------------------------`);
 console.log(`Is Number "115" Available In Given Array==>>${ arrayNumbers.includes(23)} `);
 console.log(`-----------------------------------------------------------------------------------`);
 arrayNumbers.splice(3,0,55,66);
 console.log(`Inserted Value "55" and "66" Before Index 3 ==>> ${arrayNumbers}`);
 console.log(`------------------------------------------------------------------------------------`);
 arrayNumbers.splice(4,3);
 console.log(`Removed 3 Element From Index 4 ==>> ${arrayNumbers}`);

