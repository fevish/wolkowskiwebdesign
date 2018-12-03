// 1.
var $wrap = $( "#wrap" );
 
// 2.
$wrap.on( "click", ".page-link", function( event ) {
     
    // 3.
    event.preventDefault();
     
    // 4.
    if ( window.location === this.href ) {
        return;
    }
     
    // 5.
    var pageTitle = ( this.title ) ? this.title : this.textContent;
    pageTitle = ( this.getAttribute( "rel" ) === "home" ) ? pageTitle : pageTitle + " | Wolkowski Web Design | Medicine Hat";
     
    // 6.
    History.pushState( null, pageTitle, this.href );
} );

// 1.
History.Adapter.bind( window, "statechange", function() {
     
    // 2.
    var state = History.getState();
     
    // 3.
    $.get( state.url, function( res ) {
 
        // 4.
        $.each( $( res ), function( index, elem ) {
            if ( $wrap.selector !== "#" + elem.id ) {
                return;
            }
            $wrap.html( $( elem ).html() );
        } );
 
    } );
} );
