module test {
    export class testClass{
        constructor(){
            var self = self || (() => this)();
        };
    };
};

var global = global || (function () { return this; })();