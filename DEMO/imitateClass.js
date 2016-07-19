function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.PI = 3.14159; //setup a constant

Circle.prototype.area = function () {
    return this.r * this.r * Circle.PI;
};

Circle.prototype.toString = function () {
    var text = [];
    for (var p in this) {
        if (typeof this[p] != 'function') {
            text.push(p + ':' + this[p]);
        }
    }
    return '[' + text.join() + ']';
};

function Cylinder(x, y, r, h) {
    Circle.call(this, x, y, r);
    this.h = h;
};

Cylinder.prototype = new Circle();

Cylinder.prototype.constructor = Cylinder;

delete Cylinder.prototype.x;

delete Cylinder.prototype.y;

delete Cylinder.prototype.r;

Cylinder.prototype.volumn = function () {
    return this.area() * this.h;
};


//try to encupsule the procedure
var Class = {};
Class.create = function (methods) {
    var Clz = methods.initialize;
    for (var mth in methods) {
        if (mth != 'initialize') {
            Clz.prototype[mth] = methods[mth];
        }
    }
    return Clz;
};


//Usage
var Circle2 = Class.create({
    initialize: function (x, y, r) { //as a constructor
        this.x = x;
        this.y = y;
        this.r = r;
    },
    area: function () {
        return Math.PI * Math.pow(this.r, 2);
    },
    toString: function () {
        var text = [];
        for (var p in this) {
            if (this.hasOwnProperty(p)) {
                text.push(p + ':' + this[p]);
            }
        }
        return '[' + text.join() + ']';
    }
});
var circle = new Circle2(10,10,5)

