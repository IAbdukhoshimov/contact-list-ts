myMap.on('contextmenu', function(e) {
    var marker = ...;
    marker.id = e.latlng; 
    markers.push({ coords: e.latlng, name: "<b>Custom</b>" });

    marker.on('click', function(e) {
        L.DomEvent.on(deleteBtn, 'click', function(ev) {
            var markerId = marker.id;
            var markerItem = markers.find(function(m) {
                return m.coords === markerId;
            });
            // update markerItem in some way
            // alternatively, use findIndex if you really just want the index
        }, this);
    });
 });