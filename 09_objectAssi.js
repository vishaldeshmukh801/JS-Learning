console.log(`==================================================================================================== Assignment-01 ====================================================================================`);
let professor={
    name:"Prof: Sham Chavan",
    collegeName:"Sinhagad College",
    designation:"Head Of Department",
    subject:"Java",
    age:50,
 degrees:{
    engineering:"CSC",
    PHD:"Advance Computing"
 },
 certificates:["Hacker Rank Participation","Certificate in IFC Course","Certificate in Advance Programming"]


}
console.log(`Total Object====>>>`);
console.log(professor);
console.log(`----------------------------------------------------------------------------------------------------------`);

professor.totalExperience="14 Years"
console.log(`After Adding Total Experience ===>>`);
console.log(professor);
console.log(`----------------------------------------------------------------------------------------------------------`);
professor.collegeName="RIT College";
console.log(`After Modified College Name ===>>`);
console.log(professor);
console.log(`----------------------------------------------------------------------------------------------------------`);
professor.subject="HTML";
console.log(`After Modified Subject ===>>`);
console.log(professor);
console.log(`-----------------------------------------------------------------------------------------------------------`);
professor.certificates.push("Oracle Certified");
let lastElement=professor.certificates[professor.certificates.length-1];
console.log(`Last Element Of Array Certificates===>>  ${lastElement}`);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Total Object As Follows ===>>>>`);
console.table(professor);
console.log(`-----------------------------------------------------------------------------------------------------------`);
console.log(`Traversing Total Array Certificates ===>> `);
for (const name of professor.certificates) {
    console.log(name);
    
}
console.log(`================================================================================================================ END =============================================================================================`);