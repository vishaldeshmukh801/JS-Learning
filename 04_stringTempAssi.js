console.log(`========================================= Step-01 ==============================================`);

function stringBasic() {
    console.log(`My Dream Company Is     "  Microsoft  "`);
}
stringBasic()
console.log(`================================== Step-02 ============================================`);
console.log(`------------------------------* My Hobbies *--------------------------------`);
function stringTemplateAssign() {
    
    var hobby1="Listening music ";
var hobby2="Reading Books ";
var hobby3="Watching Movies";
console.log(`My Hobbies are ==>>  || ${hobby1} ||    || ${hobby2}  || ${hobby3} ||`);
console.log(`====================================== Step-03 ================================================`);

var concatHobbies=hobby1.concat(hobby2,hobby3);
console.log(`After Concating Hobbies ==>> || ${concatHobbies} ||`);
}
stringTemplateAssign()

console.log(`================================================ END ============================================`);