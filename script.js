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
// push all cars to an array called allCars

//create a function that returns the cars

//create an array called allCars

// Loop through allCars

    // describe car 1

    //describe car 2

    //describe car 3 

    // describe car 4

    console.log(chevy.describe())

