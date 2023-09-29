console.log(`============================================= Assignment-02 ========================================`);
var voteEligible=function(age){
    
    var result=+age;
if (age<=0|| age>=130 || age==null || isNaN (result) ) {
    console.log(`Invalid Data :  ${age} `);
} else {
    if (age<18) {
        console.log(`Hey ! your age  ${age} is not eligible for vote `);
        
    } else {
        
        console.log(`Hey ! your age  ${age} is eligible for vote `);
    }
    
}
console.log(`------------------------------------------------------------------`);
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
console.log(`============================================= * END * ===============================================`);