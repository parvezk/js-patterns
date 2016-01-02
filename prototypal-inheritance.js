/**
 * Prototypal Inheritance Pattern
 *
 * Prototype-based programming is a style of object-oriented programming
 * in which behaviour reuse (known as inheritance) is performed via a
 * process of cloning existing objects that serve as prototypes.
 *
 */

function Slider(param) {

    var defaults = {},  //private property - private scope
        elem = $.extend({}, defaults, param);

    this.segment = 'value'; // exposed as public property because variable
    // assigned to THIS[Slider object], hence can be accessed outside

    this.init(this, elem);
    this.setup(this, elem);
    this.bindEvents(this);
}

Slider.prototype = {

    init: function(Slider, elem) {

        this.container = $(elem.displayimg);
        this.nav       = $(elem.navlist);
        this.current = 0;

    },

    setup: function(obj, elem) {
    },

    bindEvents: function(elem) {
    }

}; // end of prototype

$(function() { // equal to $(document).ready(function(){})

    //object instanation and direct function call 
    var someSlider = new Slider({
        displayimg: "ul.largeImg",
        navlist   : ".gallery-nav"
    });
});

/* Prototypal Inheritance */

// Define Human class
function Human() {
    this.setName = function (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    };
    this.getFullName = function () {
        return this.fname + " " + this.lname;
    };
}
 
// Define the Employee class
function Employee(num) {
    this.getNum = function () {
        return num;
    }
};
// Let Employee inherit from Human
Employee.prototype = new Human();
 
// Instantiate an Employee object
var john = new Employee("4815162342");
    john.setName("John", "Doe");
alert(john.getFullName() + "'s employee number is " + john.getNum());
// This time, I've created a Human class which contains properties
// common to humans--I moved fname and lname there since all humans,
// not just employees have names. I then extended the Employee class
// by assigning a Human object to its prototype propert

