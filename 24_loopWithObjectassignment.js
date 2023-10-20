console.log(`================================================================ Assignment-02 ==================================================`);
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
console.log(`--------------------------------------------- STEP-01 ---------------------------------`);

arrayPerson.forEach( (value)=> {
    if (value.emp_company==="TCS") {
        console.log(`Employee Name ====>>>${value.emp_name}   &  Company Name===>>> ${value.emp_company}`);
    
    }
         
} );
console.log(`--------------------------------------------- STEP-02 --------------------------------`);
console.log(`Employee From Finance Dept===>>>>`);
arrayPerson.forEach((value)=>{
    if (value.emp_dept=="Finance") {
        console.log(`Employee Name ====>>>${value.emp_name}   &  Department Name===>>> ${value.emp_dept}`);
    } 
});
console.log(`--------------------------------------------- STEP-03--------------------------------`);
console.log(`Name Starts With "R" ====>>>`);
arrayPerson.forEach((value)=>{
    if (value.emp_name.startsWith("R")) {
        console.log(`Employee Id ===>> ${value.emp_id} | Employee Name ====>>>${value.emp_name} |  Department Name===>>> ${value.emp_dept} |  Company Name===>>> ${value.emp_company}  |  Salary ===>> ${value.emp_salary}`);
        
    } 
}

);
console.log(`--------------------------------------------- STEP-04--------------------------------`);
console.log(`Employee Salary Above 75000 ===>>>`);
arrayPerson.forEach((value)=>{
    if (value.emp_salary>75000) {
        console.log(`Employee Name ====>>>${value.emp_name}   &  Company Name===>>> ${value.emp_company}   &  Salary ===>> ${value.emp_salary}`);
    } 
}

);
console.log(`--------------------------------------------- STEP-05--------------------------------`);
console.log(`Employee Salary Above & Equal to 50000  and From IT Dept ===>>>`);

arrayPerson.forEach((value)=>{
    if (value.emp_salary>=50000 && value.emp_dept=="IT") {
        
         console.log(`Employee Id ===>> ${value.emp_id} | Employee Name ====>>>${value.emp_name} |  Department Name===>>> ${value.emp_dept} |  Company Name===>>> ${value.emp_company}  |  Salary ===>> ${value.emp_salary}`);
    } 
}

);
console.log(`--------------------------------------------- STEP-06--------------------------------`);
console.log(`Employee From Infy Company===>>>`);
arrayPerson.forEach((value)=>{
    if (value.emp_company=="Infy") {
        console.log(`Employee Id ===>> ${value.emp_id} | Employee Name ====>>>${value.emp_name} |  Department Name===>>> ${value.emp_dept} |  Company Name===>>> ${value.emp_company}  |  Salary ===>> ${value.emp_salary}`);
        
    } 
}

);
console.log(`=============================================================== END ===================================================`);

