//dynamic-type language has no static data type, variables are only used to get values of references

var objects = ['caterpillar', 100, new Date()];
var name = objects[0];
var score = objects[1];
var time = objects[2];


//can use var to declaim variables or not. if not, the variable will be declaimed as a global variable
some = 10;
some;


this.some;
//will return 10
this;
//[object global]


function func() {
    var x = 10;
    y = 20;
};


func();


//console.log(x);
console.log(y);
console.log(this.y);

var x = 10;
console.log(this.x);


//can use delete to delete the property of an object and will return true if deleted successfully