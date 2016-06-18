//PROTOTYPE: Constructor Function Vs Factory Function

function Greeter(name) {
    this.name = name || 'John Doe';
}

Greeter.prototype.hello = function hello() {
    return 'Hello, my name is ' + this.name;
}

var george = new Greeter('George');

//Factory Function: I PREFER THIS..

var proto = {
    hello: function hello() {
        return 'Hello, my name is ' + this.name;
    }
};

var george = Object.create(proto);
george.name = 'George';

// FUNCTION DECLARATION Vs FUNCTION HOISTED

// FUNCTION EXPRESSION
// Any other script on the page that has a variable
// named status could cause trouble. If we wrap all
// of this in a name such as myApplication, then
// we work around that issue:

var myApplication = function () {
    var name = 'Chris';
    var age = '34';
    var status = 'single';

    function createMember() {
        // [...]
    }

    function getMemberDetails() {
        // [...]
    }
}();

function getMemberDetails() {
    // [...]
}

// ANONYMOUS FUNCTION
// Wrapped inside Nameless Anonymous Function

(function () {
    var name = 'Chris';
    var age = '34';
    var status = 'single';

    function createMember() {
        // [...]
    }

    function getMemberDetails() {
        // [...]
    }
})(window);