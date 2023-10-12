console.log(`======================================================= Step-01 ========================================`);
let bankSbi={
    bankName:"SBI Bank",
    branch:"Pandharpur",
    managerName:"Mohite p.p",
    ifscCode:"SBI336544"
    
};
let bankLocation={
    street:"Station Road ,Pandharpur",
    city:"Pandharpur",
    pin:413304
};
Object.assign(bankSbi,bankLocation);
console.log(`Cloning Object By Using Assign Method===>>>`);
console.table(bankSbi);
console.log(`-----------------------------------------------------------------------------------------`);
console.log(`Cloning Object By Using Spread operator Method===>>>`);
let bankDetail={...bankSbi,bankLocation}
console.log(bankDetail);

console.log(`---------------------------------------------------------------------------------------------`);
let rateOfInterest={
    homeLoanInterest :"12%",
    personalLoanInterest:"10%",
    duelInterest:"8%"
}
let sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.log(`Total "SBI" Bank Detail Are As Follows====>>>`);
console.table(sbiDetails);
console.log(`----------------------------------------------------------------------------------------------`);
console.log(`Traversing Merged Object By Using For In Loop===>>>> `);
for (const key in sbiDetails) {
   console.log(key,sbiDetails[key]);
}
console.log(`============================================================ * END * ========================================================`);