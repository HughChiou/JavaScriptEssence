var test;
(function (test) {
    var testClass = (function () {
        function testClass() {
            var _this = this;
            var self = self || (function () { return _this; })();
        }
        ;
        return testClass;
    }());
    test.testClass = testClass;
    ;
})(test || (test = {}));
;
var global = global || (0, eval)('this');
