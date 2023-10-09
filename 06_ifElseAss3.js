console.log(`================================================== Assignment-(Extra || If Else ||) ============================================`);

function gradeCalculation(mark) {
   if (mark>=90 && mark<=100) {
    console.log(`Fantastic Mark: ${mark},Your Grade Is A++`);
   } else {
    if (mark>=75 && mark<90) {
        console.log(`Excellent Mark : ${mark},Your Grade Is A `);
    } else {
        if (mark>=50 && mark<75) {
            console.log(`Good Mark : ${mark},Your Grade Is B `); 
        } else {
            if (mark>=35 && mark<50) {
              console.log(`Mark : ${mark},You Need Improvement `);
            } else {
                console.log(`Mark : ${mark} , Please Provide Valid Mark`);
            }
        }
    }
   }
   console.log(`-----------------------------------------------------------------------------------------------`);
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
console.log(`============================================================ END ====================================================`);
