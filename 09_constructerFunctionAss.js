console.log(`====================================================================== Step-01 =========================================================`);
function Bank(bankName,location,ifscCode,branchCode) {
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;


}
const yesBank= new Bank("YES Bank","Pune","YES534658",145887);
console.log(`Bank Name : ${yesBank.bankName}, Location : ${yesBank.location}, IFSC Code : ${yesBank.ifscCode}, Branch Code : ${yesBank.branchCode}`);
console.log(`---------------------------------------------------------------------------------------------`);
const sbiBank= new Bank("SBI Bank","Solapur","SBI334456",445577);
console.log(`Bank Name : ${sbiBank.bankName}, Location : ${sbiBank.location}, IFSC Code : ${sbiBank.ifscCode}, Branch Code : ${sbiBank.branchCode}`);
console.log(`---------------------------------------------------------------------------------------------`);
const mahBank= new Bank("Maharashtra Bank","Pune","MAH117756",885570);
console.log(`Bank Name : ${mahBank.bankName}, Location : ${mahBank.location}, IFSC Code : ${mahBank.ifscCode}, Branch Code : ${mahBank.branchCode}`);
console.log(`---------------------------------------------------------------------------------------------`);
const axisBank= new Bank("Axis Bank","Mumbai","Axis334456",771527);
console.log(`Bank Name : ${axisBank.bankName}, Location : ${axisBank.location}, IFSC Code : ${axisBank.ifscCode}, Branch Code : ${axisBank.branchCode}`);
console.log(`===================================================== Step-02 ===================================================`);
Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`Please Visit Our ${sbiBank.bankName} Between Time ===>>${sbiBank.openTime} & ${sbiBank.closeTime} `);
console.log(`-------------------------------------------------------------------------------------------------------`);
console.log(`Please Visit Our ${axisBank.bankName} Between Time ===>>${axisBank.openTime} & ${axisBank.closeTime} `);
console.log(`--------------------------------------------------------------------------------------------------------`);
console.log(`Please Visit Our ${yesBank.bankName} Having Branch Code : ${yesBank.branchCode} At ===>>${yesBank.openTime}`);
console.log(`====================================================================== END ===============================================`);



