/**
 * Pub-Sub Pattern / Observer Pattern
 */

(function($) {

  // type 1

  var o = $({});

    $.each({
        on      : 'subscribe',
        trigger : 'publish',
        off     : 'unsubscribe'

    }, function( key, api ) {
        $[api] = function() {
            o[key].apply( o, arguments );

        };
    });

  // type 2
 
  var o = $({});
 
  $.subscribe = function() {
    o.on.apply(o, arguments);
  };
 
  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };
 
  $.publish = function() {
    o.trigger.apply(o, arguments);
  };
 
}(jQuery));