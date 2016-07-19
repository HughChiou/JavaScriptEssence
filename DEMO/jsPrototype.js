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

var p = new Person('Jonny', 44);
console.log(Person.prototype === Object.getPrototypeOf(p));

//Actually, the procedure is like this
var p = {};
p.__proto__ = Person.prototype;
Person.call(p, 'Joy', 35);
console.log(p.toString());

console.log(p instanceof Person);