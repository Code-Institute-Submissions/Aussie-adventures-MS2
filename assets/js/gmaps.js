// Google maps functionality

//Global Variables
var map, infoWindow, service, bounds;
var userPosition;
var markers = [];
var currentInfoWindow;

//Initialize Map
function initMap() {
    bounds = new google.maps.LatLngBounds();
    infoWindow = new google.maps.InfoWindow();
    currentInfoWindow = infoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                map = new google.maps.Map(document.getElementById("map"), {
                    center: pos,
                    zoom: 12,
                });
                bounds.extend(pos);

                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found");
                infoWindow.open(map);
                map.setCenter(pos);

            },
            function() {
                handleLocationError(true, infoWindow);
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow);
    }
}
// Handle a geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
    // Set default location to Australia,
    pos = { lat: -33.865143, lng: 151.209900 };
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 5,
    });

    // Display an InfoWindow at the map center
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ? "Geolocation permissions denied. Using default location." :
        "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
    currentInfoWindow = infoWindow;
}

// Search Nearby activity by click
document.getElementById("camping").addEventListener("click", camping);

function camping() {
    activity('Camping');
}

document.getElementById("beaches").addEventListener("click", beaches);

function beaches() {
    activity('Beaches');
}
document.getElementById("restaurant").addEventListener("click", restaurants);

function restaurants() {
    activity('Restaurant', 'bar');
}
document.getElementById("surfing").addEventListener("click", surfing);

function surfing() {
    activity('surfing');
}
document.getElementById("parks").addEventListener("click", parks);

function parks() {
    activity('parks', 'zoo', 'museum', 'amusement_park', );
}
document.getElementById("diving").addEventListener("click", diving);

function diving() {
    activity('diving');
}


function activity(keyWord) {
    let request = {
        bounds: map.getBounds(),
        keyword: keyWord,
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, nearbyCallback);
}
//adding markers for searched activity
function nearbyCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
    }
}

function createMarkers(places) {
    removeMarkers();
    places.forEach((place) => {
        let marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            animation: google.maps.Animation.DROP,
        });

        markers.push(marker);

        //sets the info window in the place details html element
        google.maps.event.addListener(marker, "click", function() {
            let request = {
                placeId: place.place_id,
                fields: [
                    "name",
                    "formatted_address",
                    "geometry",
                    "formatted_phone_number",
                    "rating",
                    "website",
                    "price_level",
                ],
            };

            /* Only fetch the details of a place when the user clicks on a marker.*/
            service.getDetails(request, function(placeResult, status) {
                showDetails(placeResult, marker, status);
            });
        });

        // Adjust the map bounds to include the location of this marker
        bounds.extend(place.geometry.location);
    });

    /* Once all the markers have been placed, adjust the bounds of the map to show all the markers within the visible area. */
    map.fitBounds(bounds);
}

// Clear markers from map
function removeMarkers() {
    for (var i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}

// Load the activity information into the HTML elements used by the info window.
function showDetails(placeResult, marker, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) { //Show info window when user clicks on a marker
        let placeInfowindow = new google.maps.InfoWindow();
        const newLocal = "<div>";
        placeInfowindow.setContent(
            '<h4>' +
            placeResult.name +
            '</h4>' +
            "<b>Address:</b> " +
            "<div>" +
            placeResult.formatted_address +
            "</div>" +
            "<div>" +
            "<b>Phone no:</b> " +
            placeResult.formatted_phone_number +
            "</div>" +
            "<div>" +
            "<b>Website:</b> " +
            placeResult.website +
            "</div>" +
            "<div>" +
            "<b>Rating:</b> " +
            placeResult.rating +
            "</div>" +
            "<div>" +
            "<b>Price level:</b> " +
            placeResult.price_level +
            "</div>"
        );
        placeInfowindow.open(marker.map, marker);
        currentInfoWindow.close();
        currentInfoWindow = placeInfowindow;

        showDetails(placeResult);
    } else {
        console.log("showDetails failed: " + status);
    }
}