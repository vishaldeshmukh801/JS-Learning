console.log(`====================================================== Assignment 01 ==========================================`);
class Bank{

    constructor(bankName,location,accountNumber,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNumber=accountNumber;
this.ifsc=ifsc;
this.interestRate=interestRate;

    }
}
const axisBank=new Bank("Axis Bank","Pandharpur",3399167766,"Axis2234","12%");
const sbiBank=new Bank("SBI Bank","Solapur",2359166761,"SBI3425","10%");
const iciciBank=new Bank("ICICI Bank","Pune",1339187866,"ICICI6734","14%");
const kotakBank=new Bank("Kotak Bank","Mumbai",6329164766,"KO5546","11%");
const hdfcBank=new Bank("HDFC Bank","Latur",9311117466,"Hdfc9091","14%");
const punjabBank=new Bank("Punjab Bank","Thane",7322217465,"PNB8091","16%");

const setOfBank=new Set();
setOfBank.add(axisBank);
setOfBank.add(sbiBank);
setOfBank.add(iciciBank);
setOfBank.add(kotakBank);
setOfBank.add(hdfcBank);
setOfBank.add(punjabBank);
console.log(`Traversing Set Using For Of Loop & Logged Bank Name and Location ===>>>`);
console.log(`--------------------------------------------------------------------`);
for (const element of setOfBank) {
    console.log(`Bank Name : ${element.bankName}    &   Location: ${element.location}`);
    console.log(`-----------------------------------------------------------------`);
    
}
console.log(`======================================================= * END * ============================================`);


