console.log(`=========================================================== Assignment-01 ==============================================`);
class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;


    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
console.log(`------------------------------------------------------ STEP-01 -----------------------------------------------`);
const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika,emp_viny,emp_mahi];
const arrayDesendig=arrayPerson.sort((emp1,emp2)=>{
return emp1.emp_id>emp2.emp_id? -1:1;
},0)
console.log(`Array Employees In Descending Order On The Basis Of "ID" ===>>>`);
const output=arrayDesendig.forEach((element)=> {
    
    console.log(`Employee "ID" ==>> ${element.emp_id} | Employee Name ==>> ${element.emp_name}  | Employee Department ==>> ${element.emp_dept} `);
});
console.log(`--------------------------------------------------------- STEP-02 -------------------------------------------`);
const arrayAsending=arrayPerson.sort((value1,value2)=>{
return value1.emp_dept>value2.emp_dept? 1:-1;
},0)
console.log(`Array Employees In Ascending Order On The Basis Of "Department" ===>>>`);
arrayAsending.forEach((element)=> {
    
    console.log(` Employee Department ==>> ${element.emp_dept}  | Employee "ID" ==>> ${element.emp_id}  | Employee Company ==>> ${element.emp_company} `);
});
console.log(`--------------------------------------------------------- STEP-03 -------------------------------------------`);
const arrayDescending1=arrayPerson.sort((element1,element2)=>{
    return element1.emp_salary>element2.emp_salary?-1:1;
},0)
console.log(`Array Employees In Descending Order On The Basis Of "Salary" ===>>>`);

arrayDescending1.forEach((element)=>{
    console.log(` Employee Salary ==>> ${element.emp_salary}  | Employee Name ==>> ${element.emp_name}  | Employee Company ==>> ${element.emp_company} `);

})
console.log(`============================================================= * END * ==============================================`);
