
/*-------------------------------------------------------------------------------------------------------*/
/* OBJECT LITERAL PATTERN */

// Using an object literal for a jQuery feature
var myFeature = {
 
    init: function( settings ) {
        myFeature.config = {
            $items: $( "#myFeature li" ),
            $container: $( "<div class='container'></div>" ),
            urlBase: "/foo.php?item="
        };
 
        // allow overriding the default config
        $.extend( myFeature.config, settings );
 
        myFeature.setup();
    },
 
    setup: function() {
        myFeature.config.$items.each( myFeature.createContainer ).click( myFeature.showItem );
    },
 
    createContainer: function() {
        var $i = $( this );
        var $c = myFeature.config.$container.clone().appendTo( $i );
        $i.data( "container", $c );
    },
 
    buildUrl: function() {
        return myFeature.config.urlBase + myFeature.$currentItem.attr( "id" );
    },
 
    showItem: function() {
        var myFeature.$currentItem = $( this );
        myFeature.getContent( myFeature.renderView );
    },
 
    getContent: function( callback ) {
        var url = myFeature.buildUrl();
        myFeature.$currentItem.data( "container" ).load( url, callback );
    },
 
    renderView: function() {
        myFeature.$currentItem.data( "container" ).show();
        myFeature.hideContent();
    },
 
    hideContent: function() {
        myFeature.$currentItem.siblings().each(function() {
            $( this ).data( "container" ).hide();
        });
    }
 
};
 
$( document ).ready( myFeature.init );
	
	// ANOTHER SIMILAR EXAMPLE

	var VLPVideo = VLPVideo || {};
	
	VLPVideo.option = {
		setname: "helion",
		datastr: "linear",
		valname: "KTJOE322",
		domelem: $('#vid')
	};
	
	VLPVideo.init = function (option) {
		'use strict';
		this.option = $.extend({}, this.option, option);
		this.newvar = this.option.valname;
		this.eve();
	};
	
	VLPVideo.eve = function () {
		alert(this.newvar);
	};
	
	jQuery(document).ready(function () {
		VLPVideo.init({
			setname: "lithium",
			valname: "KKK111"
		});
	});

