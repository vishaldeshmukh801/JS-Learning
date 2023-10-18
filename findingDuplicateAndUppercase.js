console.log(`====================================================== STEP-01 ======================================`);
const arrayGiven=[11,3,4,11,4,7,3];
console.log(`Given Array Is ===>>> [${arrayGiven}]`);
console.log(`-----------------------------------------------------------------------`);
const setArray=new Set(arrayGiven);
const array = [];
for (const element of setArray) {
   array.push(element);
}
console.log(`After Removing Duplicate Number  ===>>>>  ${array}`);
console.log(`====================================================== STEP-02 ========================================`);

let str = "How are you mate";
console.log(`Given String Is  ====>>>  ${str}`);
console.log(`-----------------------------------------------------------------------`);
str=str.split(" ");
let newString="";
for (const element of str) {
   
   for (const key in element) {

      const char =element[key];
      if(key==0 || key==element.length-1){
         
         newString=newString+char.toUpperCase();
      }
      else{
         newString=newString+char;
      }
   }
   newString+=" ";
}
console.log(`After Converting First And Last Latter Into UpperCase====>>>  ${newString}`);
console.log(`                                                 `);
console.log(`============================================================= END ======================================`);