console.log(`================================================ Assignment-02 ==================================================`);
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

const arrayPerson = [emp_anil, emp_radha, emp_rishi, emp_sonali,emp_monika,emp_viny,emp_mahi];
const arraySalary=arrayPerson.map((salary)=>{
return salary.emp_salary;
})
console.log(`List Of All Employee Salary Are As Follows===>>>`);
console.log(arraySalary);
console.log(`------------------------------------------------------------------------------------`);
const arrayDept=arrayPerson.map((element)=>{
return element.emp_dept;

});
console.log(`List Of All Departments  Are As Follows===>>>`);
console.log(arrayDept);
console.log(`-------------------------------------------------------------------------------------`);
const arrayId=arrayPerson.map((value)=>{
    return value.emp_id
})
console.log(`List Of All Employee "ID"  Are As Follows===>>>`);
console.log(arrayId);
console.log(`====================================================== END ==========================================`);

