const num = 7;
function isPrimeNumber(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false;
        }
    }
    return true;
}
const result = isPrimeNumber(11);
console.log(`Is Number Prime: ${result}`);