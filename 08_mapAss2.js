console.log(`===================================================== Assignment-02 =======================================`);
console.log(`---------------------------------------------- Step-01 -----------------------------------------`);
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

const bankMap = new Map();
bankMap.set(3399167766,axisBank);
bankMap.set(2359166761,sbiBank);
bankMap.set(1339187866,iciciBank);
bankMap.set(6329164766,kotakBank);
bankMap.set(9311117466,hdfcBank);
bankMap.set(7322217465,punjabBank);
console.log(`---------------------------------------------- Step-02-----------------------------------------`);

console.log(bankMap);

let bankKeys = bankMap.keys();
console.log(`---------------------------------------------- Step-03 -----------------------------------------`);

for (const keys of bankKeys) {
    let element = bankMap.get(keys);
    console.log(`Bank Name===>> ${element.bankName}, Account Number==>> ${element.accountNumber}, Interest Rate==>> ${element.interestRate}`);
}
console.log(`======================================================= END =====================================================`);