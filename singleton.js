/**
 * SINGLETON / MODULE PATTERN
 *
 * If you need to make some of the things reachable to the
 * outside, you need to return them to the outside world
 * to make them properties of myApplication, This is called
 * a module pattern or singleton
 */

var myApplication = function(){
  var name = 'Chris';
  var age = '34';
  var status = 'single';
  return{
    createMember:function(){
      // [...]
    },
    getMemberDetails:function(){
      // [...]
    }
  }
}();

myApplication.createMember()
myApplication.getMemberDetails() //now works.

/**
 * SINGLETON PATTERNS
   The following structure allows the singleton to have private
   members and methods by encapsulating variable and function
   declarations inside a closure, and exposing only those that
   are to be publicly accessible.
 */

var mySingleton = function(){
 
    /*private variables and methods (not accessible directly through the  mySingleton namespace): */
    var privateVar = 'bla';
    function alertPrivate(){
      alert(privateVar);
    }
 
    /* public variables and methods (can access private vars and methods ) */
    return {
      publicMethod:function(){
        alertPrivate();
      },
      publicVar:'this is publicly accessible'
    }

}
 
var single = mySingleton();
single.publicMethod();  // alerts 'bla'
alert(single.publicVar); // alerts 'this is publicly accessible'

// It is possible to put parentheses around this structure to instantiate it immedeatly after it's parsed.This way it's always present when the script is executed and doesn't have to be instantiated separately.

var mySingleton = (function(){
 
  /*private variables and methods (not accessible directly through the  mySingleton namespace): */
  var privateVar = 'bla';
  function alertPrivate(){
    alert(privateVar);
  }
 
  /* public variables and methods (can access private vars and methods ) */
  return {
    publicMethod:function(){
      alertPrivate();
    },
    publicVar:'this is publicly accessible'

  }

})();
 
mySingleton.publicMethod();

/**
 * If you want to save resources and instantiate the singleton only
 * when it's needed you can put it's instantiation code inside another
 * constructor function like in this example:
 * */

var Singleton =(function(){
  var instantiated;
  function init (){
    // all singleton code goes here
    return {
      publicWhatever:function(){
        alert('whatever')
      },
      publicProperty:2
    }
  }
 
  return {
    getInstance :function(){
      if (!instantiated){
        instantiated = init();
      }
      return instantiated; 
    }
  }
})()
 
//to call public methods now use:
Singleton.getInstance().publicWhatever();

