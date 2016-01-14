/**
 * Module Pattern Style 1
 */

// The module pattern
var feature = (function() {
 
    // private variables and functions
    var privateThing = "secret";
    var publicThing = "not secret";
 
    var changePrivateThing = function() {
        privateThing = "super secret";
    };
 
    var sayPrivateThing = function() {
        console.log( privateThing );
        changePrivateThing();
    };
 
    // public API
    return {
        publicThing: publicThing,
        sayPrivateThing: sayPrivateThing
    };
 
})();
 
feature.publicThing; // "not secret"
feature.sayPrivateThing(); // logs "secret" and changes the value of privateThing

// USING MODULE PATTERN FOR A JQUERY FEATURE
$( document ).ready(function() {
 
    var feature = (function() {
 
        var $items = $( "#myFeature li" );
        var $container = $( "<div class='container'></div>" );
        var $currentItem = null;
        var urlBase = "/foo.php?item=";
 
        var createContainer = function() {
            var $i = $( this );
            var $c = $container.clone().appendTo( $i );
            $i.data( "container", $c );
        },

        showItem = function() {
            $currentItem = $( this );
            getContent( showContent );
        },

        showItemByIndex = function( idx ) {
            $.proxy( showItem, $items.get( idx ) );
        };
 
        $items.each( createContainer ).click( showItem );
 
        return {
            showItemByIndex: showItemByIndex
        };
 
    })();
 
    feature.showItemByIndex( 0 );
 
});

// UTILITY FN - THIS IS SINGLETON/MODULE PATTERN TOO
// this utiltiy object: just called once, executed once,
// this way, single execution-memory saved; SEAF fires
// once and assigns to utility var

var utility = (function(){
    var i = 0;
    return {
        nameGen : function(){
            var name = 'customName' + i;
            i = i + 1;
            return name;
        }
    }
})()

var name = utility.nameGen();
var name2 = utility.nameGen();