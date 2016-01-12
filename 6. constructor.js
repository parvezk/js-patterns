
// CONSTRUCTOR PATTERN

//declaring the constructor  
function ArrayMaker(arg1, arg2) {  
    this.someProperty = 'whatever';  
    this.theArray = [ this, arg1, arg2 ];  
}  
// declaring instance methods  
ArrayMaker.prototype = {  
    someMethod: function () {  
        alert( 'someMethod called');  
    },  
    getArray: function () {  
        return this.theArray;  
    }  
};  
  
var am = new ArrayMaker( 'one', 'two' );  
var other = new ArrayMaker( 'first', 'second' );  
  
am.getArray();  
// => [ am, 'one' , 'two' ] 

/*Object Instantiation*/

// Define the Employee class
function Employee(num, fname, lname) {
    this.getFullName = function () {
        return fname + " " + lname;
    }
};
 
// Instantiate an Employee object
var john = new Employee("4815162342", "John", "Doe");
alert("The employee's full name is " + john.getFullName());

function Slider(){};

Slider.prototype = {

    init: function(elem){

        var $elem = $.extend({}, elem);
        this.container = $($elem.container);
        this.nav = $($elem.nav).show();
        this.current = 0;
        this.eventListen();

    },

    setCurrent: function (dir) {
        //initial
        var pos = this.current;

        var commandTable = {
            next: function () {
                return pos += ~~ (dir === 'next');
            },
            prev: function () {
                return pos += -1;
            }
        };

        function processArrows(command) {
            commandTable[command]();
            return pos;
        }

        pos = isNaN(dir) ? processArrows(dir) : (parseInt(dir, 10) - 1);

        this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen;

    },

    clicked: function(elem, self){

            self.setCurrent($(elem).data('dir'));
            self.transition();
    }

}; // end of prototype

$(function () {
    var slider = new Slider;
    slider.init();   
});
