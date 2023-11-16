// Nothing here yet...
// Make sure to link your JS in index.html!

//  create car class
class Car {

// contruct car information
    constructor(make, model, year) {
    //make
        this.make = make;
    //model
        this.model = model;
    //year
        this.year = year;
}

// return all object information to console
    describe() {
        console.log("The vehical is a " + this.make + " " + this.model + " " + this.year)
    }
}

// create first car
const ford = new Car('ford', 'escort', '1996');

// create second car
const chevy = new Car('chevy', 'impala', '1964');

// create third car
const kia = new Car('kia', 'sportage', '2017');

// create fourth car
const honda = new Car('honda', 'civic', '2002');

// create an array
let allCars = [];

// push all cars to the array
allCars.push(ford);
allCars.push(chevy);
allCars.push(kia);
allCars.push(honda);

//create a function that returns the cars
 function carDescription(car) {
     return car.describe();
 }

// Loop through allCars
for (let i = 0; i < allCars.length; i++) {
    // describe car 1
    carDescription(allCars[i]);
}  
