var locations  = [["Career Pathways for Women in STEM", 51.532401, -0.120542, "category1",'Date And Time: 18 June 2019, 11-6 pm </p><a href="https://www.eventbrite.co.uk/e/career-pathways-for-women-in-stem-tickets-61244584200?aff=ebdssbdestsearch" target="blank">Visit website to sign up</a>',1],
            ["STEM: The Importance of STEM Education in Today’s Society", 51.562548, 0.151480, "category2",'Date And Time: 24 June 2019, 15:45 – 16:45pm </p><a href="https://www.eventbrite.co.uk/e/stem-the-importance-of-stem-education-in-todays-society-tickets-47952439036?aff=ebdssbdestsearch" target="blank">Visit website to sign up<a/>',0],
            ["Women in STEM: Create a personal website", 51.523131, -0.127935, "category2",'Date And Time: 29 May 2019, 6-9 pm </p><a href="https://www.eventbrite.com/e/women-in-stem-create-a-personal-website-tickets-61037603114?aff=ebdssbdestsearch" target="blank">Visit website to sign up</a>',1],
            ["London Community Event sponsored by NatWest Markets", 51.517422, -0.128720, "category1",'Date And Time: 23 October 2019, 11:30am-4pm</p> <a href="https://www.stemwomen.co.uk/events/stem-women-community-event-london-2019" target="blank">View website to sign up</a>',0],
            ["London 2 Community Event sponsored by NatWest Market", 51.497856, -0.174523, "category1",'Date: 27 November 2019</p> <a href="https://www.stemwomen.co.uk/events/stem-women-community-event-london-2-2019" target="blank">Visit website to sign up</a>',0],
            ["TEDxLondonWomen 2019",51.506756, -0.116179, "category2",'Date and Time: 7 December 2019, 11:30am-7:30pm </p> <a href="https://www.eventbrite.co.uk/e/tedxlondonwomen-2019-tickets-61434782087?aff=ebdssbdestsearch" target="blank">Visit website to get tickets</a>',0],
            ["Wonder Women Tech London International Conference", 51.499865, -0.134899,"category2",'Date And Time: 8 June 2019, 10:00am–5:30pm</p> <a href="https://www.eventbrite.com/e/wonder-women-tech-london-international-conference-tickets-55739908567?aff=ebdssbdestsearch" target="blank">Visit website to get tickets</a>',1],
            ["Annual Women MENA Conference 2019 - London, UK", 51.503538, -0.119328,"category2",'Date And Time: 22 June 2019, 8am-7pm </p> <a href="https://www.eventbrite.com/e/annual-women-of-mena-in-tech-conference-2019-london-uk-tickets-49013806615?aff=ebdssbdestsearch" target="blank">Click link to buy tickets</a>',0],
            ["Women Like Me: Gender, Tech & Politics", 51.500043, -0.124579,"category2",'Date And Time: 4 June 2019, 4:30pm–7:00pm</p> <a href="https://www.eventbrite.com/e/women-like-me-gender-tech-politics-tickets-61729364190?aff=ebdssbdestsearch" target="blank">Visit link to sign up</a>',0],
          ]


          var markers = [];
          var i, newMarker;
          var globalmap; //so can getmap later
          var globalbounds;
          var g_marker,g_marker_zoom;

          function initMap() {
            var styledMapType = new google.maps.StyledMapType(
            [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": -100
                },
                {
                  "lightness": 45
                }
              ]
            },
            {
              "elementType": "labels",
              "stylers": [
                {
                  "saturation": -100
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#939397"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "lightness": 100
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e2e3e6"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "poi.attraction",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "poi.government",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "poi.medical",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#abd9c0"
                }
              ]
            },
            {
              "featureType": "poi.place_of_worship",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "poi.school",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#d1d0d2"
                }
              ]
            },
            {
              "featureType": "poi.sports_complex",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#cccbcd"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fbfcff"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#bde1f6"
                }
              ]
            }
          ],
          {name: 'Styled Map'});

          var myLatLng = {lat: 51.498732, lng: -0.176935};

          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
          });
          globalmap = map; //workaround for setting varible to global


          var bounds = new google.maps.LatLngBounds(); //sets up bounds
          globalbounds = bounds; //workaround for setting varible to global

          var markerIcon = {
            url: './static/images/markerflag.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(40,40),
            labelOrigin: new google.maps.Point(0,0),
          };

          g_marker = markerIcon; //workaround for setting variable to global (again)

          var markerIcon_zoom = {
            url: './images/markerflag.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(50,50), //bottom right corner
            labelOrigin: new google.maps.Point(0,0)
          };

          g_marker_zoom = markerIcon_zoom;

          //Associate the styled map with the MapTypeId and set it to display.
          map.mapTypes.set('styled_map', styledMapType);
          map.setMapTypeId('styled_map');

          var bounds = new google.maps.LatLngBounds; //create new bounds object

          //display all locations as default
          for (i = 0; i < locations.length; i++) {
             newMarker = new google.maps.Marker({
               position: {lat: locations[i][1], lng: locations[i][2]},
               map: map,
               icon: markerIcon,
               title: locations[i][0]
             });

            //might need to rename this for each marker
            newMarker.name = locations[i][0];
            newMarker.category = locations[i][3];
            newMarker.description = locations[i][4];
            newMarker.discount = locations[i][5];
            newMarker.popupAdded = 0; //tracking popupaddition
            newMarker.setVisible(true); //
            markers.push(newMarker);

            makePopups(newMarker); //make popups currently includes popup and setvisible
            newMarker.popupAdded = 1;
            newMarker.popup.close() //close all popups when change category

            makeHover(newMarker,markerIcon,markerIcon_zoom)

            bounds.extend(
                new google.maps.LatLng(
                  newMarker.position.lat(),
                  newMarker.position.lng()
                )
              );

           }

          globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
          } //from initMap


          var categories = {
           1: 'category1',
           2: 'category2',
          };


          function makeHover(m,icon,icon_zoom) {
            google.maps.event.addListener(m, 'mouseover', function() {
            m.setIcon(icon_zoom);
            });

            google.maps.event.addListener(m, 'mouseout', function() {
            m.setIcon(icon);
            });

          }

          function makePopups(m,icon,icon_zoom) {

            if(m.popupAdded == 0){
            var desc = '<h2>' + m.name +'</h2>' + '</br><p>'+ m.description + '</p>';
            var infowindow = new google.maps.InfoWindow({
              content: desc,
            });

            m.popup = infowindow; //add popup to list that we can retrieve later to close popups

            m.addListener('click', function() {
              //setIconsSmall(icon); //sets all others temporarily to small

              closeAllPopups()
              infowindow.open(map, m);
              });
            }
          }


          function setvis(m,v) {
            m.setVisible(v);
          }

          function addMarker(place)
          {
              var myLatLng = new google.maps.LatLng(place.latitude, place.longitude);
              var name = place.place_name + ", " + place.admin_name1;

              var marker = new MarkerWithLabel({
                  position: myLatLng,
                  map: map,
                  labelContent: name
              });

              markers.push(marker);
          }


          //triggered when changing category
          function displayMarkers(category) {
          var bounds = new google.maps.LatLngBounds; //create new bounds object

          //decoupled popups from category selector
           for (i = 0; i < markers.length; i++) {
             var test = categories[category];
             makePopups(markers[i],g_marker,g_marker_zoom); //make popups currently includes popup and setvisible
             markers[i].popupAdded = 1;
             markers[i].popup.close() //close all popups when change category

             if (markers[i].category === test) {
               setvis(markers[i],true);

               bounds.extend(
                   new google.maps.LatLng(
                     markers[i].position.lat(),
                     markers[i].position.lng()
                   )
                 );

             }
             else {
               setvis(markers[i],false);
             }
           }
           globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
          }


          function closeAllPopups() {
            //loops through table and closes all popups
             for (i = 0; i < markers.length; i++) {
               markers[i].popup.close() //close all popups when change category
             }

          }

          function setIconsSmall(icon) {
            //loops through table and closes all popups
             for (i = 0; i < markers.length; i++) {
               markers[i].setIcon(icon);//set all others to small (can still be moused over)
             }

          }

          function displayDiscounts(discount_bool) { //1 if discount offered, 0 if no discount offered
          var bounds = new google.maps.LatLngBounds; //create new bounds object

          //decoupled popups from category selector
           for (i = 0; i < markers.length; i++) {
             makePopups(markers[i]); //make popups currently includes popup and setvisible
             markers[i].popupAdded = 1;
             markers[i].popup.close() //close all popups when change category

             if (markers[i].discount === discount_bool) {
               setvis(markers[i],true);

               bounds.extend(
                   new google.maps.LatLng(
                     markers[i].position.lat(),
                     markers[i].position.lng()
                   )
                 );

             }
             else {
               setvis(markers[i],false);
             }
           }
           globalmap.fitBounds(bounds); //would like smooth animation in future (possibly panToBounds??), need this ourside for loop
          }
