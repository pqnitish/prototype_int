function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType;
}
Vehicle.prototype.accelerate = function (speed) {
  this.speed += 20;
  console.log(
    `${this.brand} ${this.model} is increasing speed by${this.speed}`
  );
};
Vehicle.prototype.brake = function (speed) {
  this.speed -= 20;
  console.log(
    `${this.brand} ${this.model} is decreasing speed by${this.speed}`
  );
};
Vehicle.prototype.refuel = function () {
  console.log(`${this.brand} ${this.model} is is refueling`);
};
function Car(brand, model, speed, fuelType, numberOfWheels) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels;
}
Car.prototype.honk = function () {
  console.log("honking");
};
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
function Airplane(
  brand,
  model,
  speed,
  fuelType,
  numberOfWheels,
  numberOfEngines,
  hasLandingGear
) {
  Vehicle.call(this, brand, model, speed, fuelType);
  this.numberOfWheels = numberOfWheels;
  this.numberOfEngines = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}
Airplane.prototype.takeOff = function () {
  console.log("taking off");
};
Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype);

let car1 = new Car("Maruti", "bx02", 20, "petrol", 4);
let air = new Airplane("indgo", "dso12", 20, "fuel", 5, 2, true);
console.log(car1);
console.log(air);
car1.accelerate(20);
car1.brake(10);
car1.refuel();
car1.honk();
air.accelerate(20);
air.brake(10);
air.refuel();
air.takeOff();
