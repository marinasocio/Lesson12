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

	set number(value) {
		this.num = value;
	}
	set sum(value) {
		this.num = this.num + value;
	}
	set minus(value) {
		this.num = this.num - value;
	}
	set multiply(value) {
		this.num = this.num * value;
	}
	set divide(value) {
		this.num = this.num / value;
	}
	get number() {
		return 'Result: ' + this.num;
	}
}
const result = new Calc(0);

result.number = 7;
result.minus = 5;
result.multiply = 10;
result.divide = 2;

//Exercise 6

// Parent function

function Planet(name) {
	this.name = name;
	this.getName = function() {
		return 'Planet name is ' + this.name;
	};
}

Planet.prototype.getName = function() {
	return this.getName;
};

// Child function

function PlanetWithSatellite(name, satelliteName) {
	Planet.call(this, name);
	this.satelliteName = satelliteName;
	this.getSatellite = function() {
		return 'The satellite is ' + this.satelliteName;
	};
}
// Inherit prototype from Planet to PlanetWithSatellite
PlanetWithSatellite.prototype = Object.create(Planet.prototype);

// Return Child lost constructor characterictics
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

var earth = new PlanetWithSatellite('earth', 'moon');
console.log(new PlanetWithSatellite('earth', 'moon'));
earth.getName();
earth.getSatellite();

//Exercise 7 - in progress

// class Building {
// 	constructor(name, floors) {
// 		this.name = name;
// 		this.floors = floors;
// 	}
// 	getFloors() { return this.floors; }

// }

// class House {

// }

// class Shoppingcenter {

// }
