// Status Monitor Example

require(['keycodes','keyboard','jquery'],
  function ( keycodes, keyboard, $ ) {

    $(function() {

        var keysList = $('#keys'), i;

        for ( code in keycodes.keynames ) {

            $('<li>').attr('id', 'key' + code )
                     .text( keycodes.keynames[code] )
                     .appendTo( keysList );
        }

        $(document).keydown(function(event) {
            event.preventDefault();
            keyboard.handlePress( event.keyCode );
            refresh();
        });

        $(document).keyup(function(event) {
            event.preventDefault();
            keyboard.handleRelease( event.keyCode );
            refresh();
        });

        function refresh() {

            for ( var i in keycodes.keycodes ) {
                var elem = $('#key'+i);
                if ( keyboard.keys[i].down ) {
                    elem.hasClass('down') || elem.addClass('down');
                }
                else {
                    elem.hasClass('down') && elem.removeClass('down');
                }
            }
        }

    });

});
