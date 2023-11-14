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
const ford = new Car('ford', 'escort', '1996')
// create second car

// create third car

// create fourth car

// push all cars to an array called allCars

//create a function that returns the cars

//create an array called allCars

// Loop through allCars

    // describe car 1

    //describe car 2

    //describe car 3 

    // describe car 4

console.log(ford.describe);