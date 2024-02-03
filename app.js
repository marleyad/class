
class Vehicle {
    constructor (make, model, year) {
        this.make = make
        this.model = model 
        this.year = year 
    }

    honk() {
        return "beep!"
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

let myFrirstVehicle = new Vehicle ('Honda', 'convertible', 2013)


class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

let myFirstCar = new Car ('Toyota', 'Camry', 2034)

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 2
        }

        revEngine() {
            return "Vroom!!!"
        }
    }

let myFirstMotorcycle = new Motorcycle ('Honda', 'Grom', 2020)

class Garage {
    constructor (capacity) {
        this.vehicles = []
        this.capacity = capacity
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Sorry Only vehicles allowed in here"
        }
        if (this.vehicles.length > this.capacity) {
            return "Sorry, We are at capacity!"
        }
        this.vehicles.push(newVehicle)
        return "Vehicle has been added!"
    }
}