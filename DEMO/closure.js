function doSome() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}

var foo = doSome();

console.log(foo(20));
console.log(foo(30));