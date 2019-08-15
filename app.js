// Exercise 1

function Car(brand, age) {
	this.brand = brand.charAt(0).toUpperCase() + brand.substr(1);
	this.age = new Date().getFullYear() - age;
}

Car.prototype.getCarYear = function() {
	return `${this.brand} ${this.lastName}`;
};

const car = new Car('miniCooper', 3);
const car2 = new Car('lexus', 5);

// Exercise 2

function Reverse(str) {
	this.str = str.split('').reverse().join('');
}

// Reverse.prototype.getReverse = function() {
// 	return `${this.str}`;
// };

const revers = new Reverse('Marina Kulieva');
console.log(revers);

// Exercise 3

class Component {
	constructor(tagName, node) {
		this.tagName = tagName || 'div';
		this.node = document.createElement(tagName);
	}
}

const comp = new Component('span');

// Exercise 4

class Component2 {
	constructor(tagName, node) {
		this.tagName = tagName || 'div';
		this.node = document.createElement(tagName);
	}

	setText() {
		this.node.textContent = text;
	}
}

//Exercise 5

class Calc {
	constructor(num) {
    this.num = num;
  }
  
  set number(value) {this.num = value;}
	set sum(value) {this.num = this.num + value;}
  set minus(value) {this.num = this.num - value;}
  set multiply(value) {this.num = this.num * value;}
  set divide(value) {this.num = this.num / value;}
  get number() {return "Result: " + this.num}
}
const result = new Calc(0);

result.number = 7;
result.minus = 5;
result.multiply = 10;
result.divide = 2;

//Exercise 6 - in progress

// function Planet(name) {
// 	this.name = name;
// 	this.getName = function () {
// 			return 'Planet name is ' + this.name;
// 	}
// }

// function PlanetWithSatellite(name) {
// 	Planet.apply(this, arguments);
// }

// PlanetWithSatellite.prototype = Object.create(Planet.prototype);
// PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName();
// console.log(earth);


