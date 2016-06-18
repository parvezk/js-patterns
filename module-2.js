/**
 * Module Pattern Style 2
 */

// https://coderwall.com/p/m23ubw?
// http://toddmotto.com/mastering-the-module-pattern/

//Basic form (using literal notation)
var MyApp = {};
MyApp.MyModule = (function () {
    var privateVariable = 1;
    var publicVariable = 2;
    var publicFunction = function () {
        return privateVariable + publicVariable;
    }
    return {
        publicVariable: publicVariable,
        publicFunction: publicFunction
    };
})();
console.log(MyApp.MyModule.privateVariable); //undefined
console.log(MyApp.MyModule.publicVariable); //2
console.log(MyApp.MyModule.publicFunction()); //3

//Basic form (using an object)
// We achieve encapsulation by using a closure (Immediate Function)
// and deciding what properties are visible to the parent scope.
// As we saw, closures store the local variables scope at the
// time of execution. Here is when we call the immediate function.

var MyApp = {};
MyApp.MyModule = (function () {
    var module = {};
    var privateVariable = 1;
    module.publicVariable = 2;
    module.publicFunction = function () {
        return 3;
    }
    return module;
})();
console.log(MyApp.MyModule.privateVariable); //undefined
console.log(MyApp.MyModule.publicVariable); //2
console.log(MyApp.MyModule.publicFunction()); //3


// Advanced form (using parameter injection)
// Sometimes we need an initial state or dependencies.
// We can use the Immediate Function parameters toachieve that.

var MyApp = {};
var config = {a: 1};
MyApp.MyModule = (function (config) {
    return {
        MyVariable: config.a || 2
    };
})(config);
console.log(MyApp.MyModule.MyVariable); // 1