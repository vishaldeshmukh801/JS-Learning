console.log(`for in loop`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
for (const index in arrayNumber) {
    const element=arrayNumber[index];
    console.log(`Index: ${index}, value: ${element}`);
}console.log(`========= Traversing an array using while loop ==============`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
let index=0;
while (index<arrayNumber.length) {
    console.log(arrayNumber[index]);
    index++;
}
// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS
// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`for of loop`);
for (const element of arrayNumber) {
    console.log(element);
}
console.log(`join method`);
const joinedElement = arrayNumber.join(",");
console.log(joinedElement);

console.log(`Resizing an array`);
var arrayNumber = [22, 11, 44, 55, 77, 33];// [22, 11, 44]
arrayNumber.length = 3;
console.log(arrayNumber);