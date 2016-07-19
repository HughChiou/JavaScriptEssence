function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function () {
    return '[' + this.name + ',' + this.age + ']';
};

var p1 = new Person('Justin', 35);
var p2 = new Person('Mary', 27);

console.log(p1.toString());
console.log(p2.toString());
console.log(Person.prototype === Object.getPrototypeOf(p1));


//Actually, the procedure is like this
var p3 = {};
p3.__proto__ = Person.prototype;
Person.call(p3, 'Joy', 35);

console.log(p3.toString());
console.log(p3 instanceof Person);


var p4 = Object.create(Person.prototype);
Person.call(p4, 'Tony', 34);

console.log(p4.toString());
console.log(p4 instanceof Person);