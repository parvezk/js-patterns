
/**
 * REVEALING MODULE PATTERN
 *
 * Furthermore, if I want to call one method from another,
 * I have to call it preceded by the myApplication name.
 * So instead, I prefer simply to return pointers to the
 * elements that I want to make public. This even allows
 * me to shorten the names for outside use:
 * I've called this revealing module pattern.
 */

var myApplication = function(){

  var name = 'Chris',
      age = '34',
      status = 'single';

  function createMember(){
    // [...]
  }

  function getMemberDetails(){
    // [...]
  }

  return{
    create:createMember,
    get:getMemberDetails
  }

}();

myApplication.get();
myApplication.create() //now works.

