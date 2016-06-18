/**
 * REVEALING MODULE PATTERN
 *
 */

var myApplication = function () {

    var name = 'Chris',
        age = '34',
        status = 'single';

    function createMember() {
        // [...]
    }

    function getMemberDetails() {
        // [...]
    }

    return {
        create: createMember,
        get: getMemberDetails
    }

}();

myApplication.get();
myApplication.create(); //now works.

