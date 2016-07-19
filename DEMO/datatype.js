//Primitive data and Composite data and 2 special value-null and undefined


var equalNaN = NaN == NaN;
//will be false

var IsNaN = isNaN(NaN);
//will be true

var demoNaN = isNaN(1 / "two");
//will be true


//string is primitive data

var ch1 = 'A';
typeof ch1;
//will be string

var ch2 = 'B';
typeof ch2;
//will be string

typeof boolean
//will be boolean


//composite data will be a object, they are all an instance of object, so typeof [composite data] will be 'object'

var o1 = new Object();

var o2 = {};

var o3 = [1, 2, 3];

typeof o1;
typeof o2;
typeof o3;
//will be object


//test a variable is an instance of whom
var x1 = {};
var x2 = [];

x1 instanceof Object;
//will be true

x1 instanceof Array;
//will be false

x2 instanceof Object
//will be true

x2 instanceof Array;
//will be true

typeof null
//will be 'object'

null instanceof Object;
//will be false

var x = null; //will be null
var x; //will be undefined
