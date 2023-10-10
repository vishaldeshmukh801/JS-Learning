console.log(`================================================================================ Step-01 ==============================================================================`);
class Vehicle{
constructor(vehicleName,color,engineType,fuelType,seatingCapacity,topSpeed){
this.vehicleName=vehicleName;
this.color=color;
this.engineType=engineType;
this.fuelType=fuelType;
this.seatingCapacity=seatingCapacity;
this.topSpeed=topSpeed;

}

}
const arrayOfVehicle1= new Vehicle ("Audi Q7","Black","3.0L V6 TFSI","Petrol","7","250");
console.log(`Name Of Vehicle 1 ==>>${arrayOfVehicle1.vehicleName}| Color ==>>${arrayOfVehicle1.color} | Engine Type ==>> ${arrayOfVehicle1.engineType} | Fuel Type ==> ${arrayOfVehicle1.fuelType} | Seating Capacity==>> ${arrayOfVehicle1.seatingCapacity}  | Top Speed==>> ${arrayOfVehicle1.topSpeed}` );
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
const arrayOfVehicle2= new Vehicle ("Range Rover ","white","3.2L V6 ","Petrol","6","200");
console.log(`Name Of Vehicle 2 ==>>${arrayOfVehicle2.vehicleName}| Color ==>>${arrayOfVehicle2.color} | Engine Type ==>> ${arrayOfVehicle2.engineType} | Fuel Type ==> ${arrayOfVehicle2.fuelType} | Seating Capacity==>> ${arrayOfVehicle2.seatingCapacity}  | Top Speed==>> ${arrayOfVehicle1.topSpeed}` );
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
const arrayOfVehicle3= new Vehicle ("BMW","Black","2993 to 2998 cc","Petrol","5","200");
console.log(`Name Of Vehicle 3 ==>>${arrayOfVehicle3.vehicleName}| Color ==>>${arrayOfVehicle3.color} | Engine Type ==>> ${arrayOfVehicle3.engineType} | Fuel Type ==> ${arrayOfVehicle3.fuelType} | Seating Capacity==>> ${arrayOfVehicle3.seatingCapacity}  | Top Speed==>> ${arrayOfVehicle3.topSpeed}` );
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
const arrayOfVehicle4= new Vehicle ("Audi Q6","red","2.8L V6 TFSI","Petrol","7","250");
console.log(`Name Of Vehicle 4 ==>>${arrayOfVehicle4.vehicleName}| Color ==>>${arrayOfVehicle4.color} | Engine Type ==>> ${arrayOfVehicle4.engineType} | Fuel Type ==> ${arrayOfVehicle4.fuelType} | Seating Capacity==>> ${arrayOfVehicle4.seatingCapacity}  | Top Speed==>> ${arrayOfVehicle4.topSpeed}` );
console.log(`----------------------------------------------------------------------------------------------------------------------------------------`);
const arrayOfVehicle5= new Vehicle ("Hyundai Creta","white","1497 cc and 1498 cc ","Diesel","8","250");
console.log(`Name Of Vehicle 5 ==>>${arrayOfVehicle5.vehicleName}| Color ==>>${arrayOfVehicle5.color} | Engine Type ==>> ${arrayOfVehicle5.engineType} | Fuel Type ==> ${arrayOfVehicle5.fuelType} | Seating Capacity==>> ${arrayOfVehicle5.seatingCapacity}  | Top Speed==>> ${arrayOfVehicle5.topSpeed}` );
console.log(`=================================================================================== Step-02 ===========================================================================`);
class College{
constructor(collegeName,city,departments,principalName){
this.collegeName=collegeName;
this.city=city;
this.departments=departments;
this.principalName=principalName;

}
display(){
console.log(`College Information Are As Follows==>> ${this.collegeName},${this.city},${this.departments} ,${this.principalName}`);
}


}
const college1=new College ("Sinhagad College","Pandharpur","Mech,Cs,It,civil","Karande Sir");
college1.display();
console.log(`---------------------------------------------------------------------------------------`);
const college2 = new College ("SVERIS College","Gopalpur","Mech,Cs,It,civil","Ronge Sir");
college2.display();
console.log(`---------------------------------------------------------------------------------------`);


const college3 = new College ("MIT","Pune","Mech,Cs,It,civil","Chavan Sir");
college3.display();
console.log(`---------------------------------------------------------------------------------------`);


const college4 = new College ("RIT","Kolapur","Mech,Cs,It,civil","Kulkarni Sir");
college4.display();

console.log(`===================================================================================== Step-03 ======================================================================`);
function traverseObject(college) {
    for (const key in college) {
        const element = college[key];
        console.log(`${key}: ${element}`);
        
    }
}

traverseObject(college1);
console.log(`--------------------------------------------------------------------------------------------------`);
traverseObject(college2);
console.log(`--------------------------------------------------------------------------------------------------`);
traverseObject(college3);
console.log(`--------------------------------------------------------------------------------------------------`);
traverseObject(college4);
console.log(`--------------------------------------------------------------------------------------------------`);
console.log(`======================================================================================== * END * ========================================================================`);


