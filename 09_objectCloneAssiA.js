console.log(`======================================================= STEP-01 =========================================`);
let personalDetail={
    myName:"Vishal Deshmukh",
    age:25,
    city:"Solapur",
    birthDate:"26 Jan 1998",
    graduation:"BE Mechanical"
};
const collegeDetails={
    name:"Sinhagad College Of Engineering",
    address:"Pandharpur",
    department:6,
    principalName:"karande Sir",
    grade:"A+"
}
Object.assign(personalDetail, collegeDetails);
console.log(`Merged Object "Personal Detail & College Detail ===>>>`);
console.table(personalDetail);
console.log(`======================================================= STEP-02 =========================================`);
let myFriends=["Raj","Vishakha","Prutvi","Mahesh"];
Object.freeze(myFriends);
console.log(`Freezing Friend list===>>`);
console.log(myFriends);
console.log(`--------------------------------------------------------------------`);
console.log(`My Best Friends Are (After Freeze) & (Using For of loop)====>>>`);
for (const iterator of myFriends) {
    console.log(iterator);
}
console.log(`======================================================= STEP-03 ==========================================`);
let company="Codemind Technology";
result=""
for (let index = company.length-1; index >= 0; index--) {
    let char = company.charAt(index);
    if (char==" ") {
        break
    } else {
        result=result+char
    }
    
}
console.log(`Word Technology In Reverse Order===>>`);
console.log(result);
console.log(`============================================================ END =============================================`);