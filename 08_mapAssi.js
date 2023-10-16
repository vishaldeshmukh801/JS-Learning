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
console.log(axisBank);
const sbiBank=new Bank("SBI Bank","Solapur",2359166761,"SBI3425","10%");
console.log(sbiBank);
const iciciBank=new Bank("ICICI Bank","Pune",1339187866,"ICICI6734","14%");
console.log(iciciBank);
const kotakBank=new Bank("Kotak Bank","Mumbai",6329164766,"KO5546","11%");
console.log(kotakBank);
const hdfcBank=new Bank("HDFC Bank","Latur",9311117466,"Hdfc9091","14%");
console.log(hdfcBank);
const punjabBank=new Bank("Punjab Bank","Thane",7322217465,"PNB8091","16%");
console.log(punjabBank);

const map=new Map();
map.set("Axis Bank Account Number ",axisBank.accountNumber);
map.set("SBI Bank Account Number",sbiBank.accountNumber);
map.set("ICICI Bank Account Number",iciciBank.accountNumber);
map.set("Kotak Bank Account Number",kotakBank.accountNumber);
map.set("HDFC Bank Account Number",hdfcBank.accountNumber);
map.set("Punjab Bank Account Number",punjabBank.accountNumber);
console.table(map);
console.log(`-------------------------------------------------------------------`);
let bankKeys = map.keys();
console.log(`=================== Traversed and log the Values ===================`);
for (const keys of bankKeys) {
    let element = map.get(keys);
    console.log(`Bank Name:- ${element.bankName}, Account Number:- ${element.accountNumber}, Interest Rate:- ${element.interestRate}`);
}
console.log(`======================================================= * END * ============================================`);


