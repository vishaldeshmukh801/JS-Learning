function gradeSystem(grade) {
   var result=+grade;
    if (grade>100||grade<0||grade==null||isNaN(result)) {
        console.log(` Hey ! Your Grade  " ${grade} " Is  "  Invalid  Data  "`);
        
    } else {
        if (grade<35||grade<60||grade<75) {
            console.log(` Hey ! Your Grade  " ${grade} " Is  "  You Are Failed  "`);
        } else {
            console.log(` Hey ! Your Grade  " ${grade} " Is  "  You Are Passed  "`);
            console.log(` Hey ! Your Grade  " ${grade} " Is  "  Grade is c  "`);


        }
    }
}
gradeSystem(65)