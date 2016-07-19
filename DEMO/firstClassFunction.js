var printIt = function (element) {
    console.log(element);
};

//[1, 2, 3].forEach(printIt, this);

var naturalOrder = function (num1, num2) {
    return num1 - num2;
};

[2, 7, 6, 1, 9, 5].sort(naturalOrder)
    .forEach(printIt, this);



//Anonymous function 

var numbers2 = [5, 1, 7, 3, 2];
numbers2.sort(function (num1, num2) {
    return num1 - num2;
}).forEach(function (elem) {
    console.log(elem);
});