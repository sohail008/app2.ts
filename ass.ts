
abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    rent(): string {
      if (this.rented) {
        return "Vehicle already rented.";
      } else {
        this.rented = true;
        return "Vehicle rented.";
      }
    }
  
    returnVehicle(): string {
      if (this.rented) {
        this.rented = false;
        return "Vehicle returned.";
      } else {
        return "Vehicle not rented.";
      }
    }
  
    abstract rentalRate(): number;
  }
  
  class Car extends Vehicle {
    private numDoors: number;
    private numSeats: number;
  
    constructor(make: string, model: string, year: number, numDoors: number, numSeats: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.numDoors = numDoors;
      this.numSeats = numSeats;
    }
  
    rentalRate(): number {
      return 50;
    }
  
    getNumDoors(): number {
      return this.numDoors;
    }
  
    getNumSeats(): number {
      return this.numSeats;
    }
  }
  
  class Truck extends Vehicle {
    private maxPayload: number;
  
    constructor(make: string, model: string, year: number, maxPayload: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.maxPayload = maxPayload;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getMaxPayload(): number {
      return this.maxPayload;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, engineSize: number, rented: boolean = false) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 25;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  } 
  const car = new Car('Toyota', 'Corolla', 2021, 4, 5, true);
  const truck = new Truck('Ford', 'F-150', 2022, 5000, true);
  const motorcycle = new Motorcycle('Harley-Davidson', 'Softail', 2021, 107, true);
  
  console.log(car.rent()); // "Vehicle already rented."
  console.log(car.returnVehicle()); // "Vehicle returned."
  console.log(car.rent()); // "Vehicle rented."
  console.log(car.returnVehicle()); // "Vehicle not rented."
  
  console.log(truck.rent()); // "Vehicle already rented."
  console.log(truck.returnVehicle()); // "Vehicle returned."
  console.log(truck.rent()); // "Vehicle rented."
  console.log(truck.returnVehicle()); // "Vehicle not rented."
  
  console.log(motorcycle.rent()); // "Vehicle already rented."
  console.log(motorcycle.returnVehicle()); // "Vehicle returned."
  console.log(motorcycle.returnVehicle()); // "Vehicle not rented."