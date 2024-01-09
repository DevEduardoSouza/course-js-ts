class Car {
  constructor(fuel, maxspeed) {
    this.fuel = fuel;
    this.maxspeed = maxspeed;
  }

  speedUp(speed) {
    console.log(`Carro acelerou ${speed}KM/h`);
  }
}

const car1 = new Car(20, 250);
console.log(car1);
