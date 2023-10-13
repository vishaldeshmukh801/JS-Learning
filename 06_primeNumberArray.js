console.log(`========================================================= Assignment-01 =============================================`);
function isPrimeNumber(num){
  if (num<= 1) {
    return false
    
  }
  for (let index = 2; index < num; index++) {
    if (num% index==0) {
        return false
    }
    
  }
  return true;
}
const array = [11,3,6,10,43,29,50];
console.log(`Given Array is ===>>> [ ${array}]`);
for (const num of array) {
const result=isPrimeNumber(num);
console.log(`------------------------------------------------------------`);
console.log(`Given Number is ===>> ${num}`);
console.log(`Given Number " ${num} " Is Prime Number ===>>> ${result}`);

}
console.log(`=============================================================== END ===================================================`);