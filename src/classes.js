// 'use strict';

// // class declaration
// class Car {}

// // class expression
// const Bike = class {};

// function Train(type) {
//   this.type = type;
// }

// const train = Train();
// // const car = Car(); // no!

// console.dir(Car)
// // console.dir(Train)

// ------------- CLASSES --------------

class Transport {
  constructor(type) {
    this.type = type;
  }
}

class Plain extends Transport {
  constructor(type, speed) {
    super(type);
    this.speed = speed;
  }
}

class Ship extends Transport {}

class Train extends Transport {}

class Vechile extends Transport {
  constructor(type) {
    super(type);
  }

  drive() {
    console.log('I just drive to anywhere');
  }
}

const an = new Plain('plain', 300);

// console.log(an);

class Car extends Vechile {
  static discount = 0.1;

  #price;
  #priceUnit = '$';

  static isCar(obj) {
    return obj instanceof this;
  }

  static getFullCarTitle(car) {
    return `${car.brand} ${car.model}`;
  }

  constructor(type, brand, model, price, engineVolume) {
    super(type);
    this.brand = brand;
    this.model = model;
    this.#price = price;
    this.engineVolume = engineVolume;
    this._tankVolume = 50;
  }

  get price() {
    return this.#addUnitPrice();
  }

  set price(price) {
    if (price > 0) {
      this.#price = price * (1 - Car.discount);
    }
  }

  #addUnitPrice() {
    return `${this.#price} ${this.#priceUnit}`;
  }

  fillFuel(volume) {
    this._tankVolume += volume;
    return this._tankVolume >= 50
      ? `My ${this.brand} has ${this._tankVolume} liter of gas`
      : `Tank is full`;
  }

  drive(city) {
    // super.drive();
    // console.log(`Go to ${city}`);
    this._tankVolume -= 10;
    return this._tankVolume < 0
      ? `Tank volume is ${this._tankVolume}`
      : 'Tank is empty';
  }
}

const honda = new Car('sedan', 'Honda', 'CRV', 30000, 2.5);

// console.log(honda);
// console.log(honda._tankVolume);
// console.log(honda.price);
// honda.price = 50000;
// console.log(honda.price);

// // honda.drive('Kiev');
// console.log(honda.drive());
// console.log(honda.drive());
// // fillFuel;

// console.log(Car.isCar(honda));
// console.log(Car.getFullCarTitle(honda));

// --- Array on classes ---

class MyArrayIterator {
  /**
   *
   * @param {MyArray} myArray
   */
  constructor(myArray) {
    this.array = myArray;
    this.count = 0;
  }

  next() {
    return {
      value: this.array[this.count++],
      done: this.count > this.array.length,
    };
  }
}

class MyArray {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }

  push(...args) {
    if (args) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
    }
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - i];
    delete this[--this.length];
    return lastItem;
  }

  forEach(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  }

  concat(...args) {
    const res = new MyArray();
    this.forEach((el) => {
      res.push(el);
    });
  }

  [Symbol.Iterator]() {
    return new MyArrayIterator(this.myArray);
  }
}
