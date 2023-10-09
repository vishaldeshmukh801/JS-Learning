console.log(`===================================================== Assignment-01 =======================================`);
let bankSbi={
    bankName: "SBI Bank",
    branch: "Solapur",
    accountNo: 3399157744,
    ifscCode: "SBI225588",
    customerId: 1144778
 
}
console.log(`------------------   Created Object "bankSbi"   ---------------------`);
let bankLocation={
street:"KBP College Road,Solapur",
city:"Solapur",
pin:413304,

}
console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`------------------   Created Object "bankLocation"   ---------------------`);
console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`Cloning Object 1 & Object 2  Inside Empty Object=====>>>`);
let cloneBankSbi=Object.assign({},bankSbi,bankLocation);
console.table(cloneBankSbi);
console.log(`---------------------------------------------------------------------------------------------`);
let rateOfInterest={
    homeLoanInterest :"15%",
    personalLoanInterest:"14%",
    duelInterest:"14%"
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