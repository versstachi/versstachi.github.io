// Layer map
var map = L.map('mapid').setView([50.80925310310907, -0.1361937699561519], 3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 18, attribution: '[insert correct attribution here!]'  
}).addTo(map); 
  

map.options.maxZoom = 20;
map.options.minZoom = 3;
map.removeControl(map.zoomControl);  

function clickZoom(e) {
    map.setView(e.target.getLatLng(),5);
}



 var markers = [
    [ 23.135044427508504, -82.42811672821004, "MSC SEASIDE", "normal", "notification_warning","3"],
    [ 53.54799600616597, 9.790965060430668, "CRUISE  AUSONIA", "stay", "notification_alert","2" ],
    [ 42.33975833769053, -70.98629466906411, "BUNGA LOTUS", "anchor", "notification_status","1" ] 
 ];
 
 //Loop through the markers array
 for (var i=0; i<markers.length; i++) { 
  var lon = markers[i][0];
  var lat = markers[i][1]; 
  var marker;
  var markerIcon = L.divIcon(
    {
    html: `
    <div class='marker__image ${markers[i][3]}'><img src='img/marker-icon-${markers[i][5]}.png' alt=''></div>
    <div class='marker__image_container ${markers[i][3]} ${markers[i][4]}'>
      <div class='marker__image_label'>
        <div class='marker__image_title'>${markers[i][2]}</div>
        <div class='marker__label__status'>Under way</div>  
      </div>
      <div class='popup'>Catanzaro<img src='img/arrow-forward-poup.svg' alt=''>Taranto<div class='popup_status'>Normal</div></div>
    </div>
    `,
    className: 'marker-label',
  }); 
  var markerLocation = new L.LatLng( lon, lat);
    marker = new L.marker(markerLocation, {icon: markerIcon}).addTo(map).on('click', clickZoom); 
    map.addLayer(marker); 
    marker.addTo(map).on('click', function () {
      sidebar.toggle(); 
      document.querySelector(".notification_panel").classList.remove('active');  
      document.querySelector(".all_vessel_tab").classList.remove('active'); 
      document.querySelector(".voyage_panel").classList.remove('active');   
    }); 
 }

// map.on('popupopen', function(e) {
//     // find the pixel location on the map where the popup anchor is
//     var px = map.project(e.popup._latlng);
//    // find the height of the popup container, divide by 2 to centre, subtract from the Y axis of marker location
//     px.y -= e.popup._container.clientHeight/2;
//     // pan to new center
//     map.panTo(map.unproject(px),{animate: true});
// });

// // zoom in function
var zoomIn = document.getElementById('in');
zoomIn.addEventListener('click',function zoomInFunc() {
  map.setZoom(map.getZoom() + 1)
}, false); 

// // zoom out function
var zoomOut = document.getElementById('out');
zoomOut.addEventListener('click',function zoomInFunc() {
  map.setZoom(map.getZoom() - 1)
}, false); 
   
//  map sidebar
var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left',
    container: 'sidebar',
});
map.addControl(sidebar);
map.on('click', function () {
    sidebar.hide();
});
// marker.addTo(map).on('click', function () {
//   sidebar.toggle(); 
//   document.querySelector(".notification_panel").classList.remove('active');  
//   document.querySelector(".all_vessel_tab").classList.remove('active'); 
//   document.querySelector(".voyage_panel").classList.remove('active');   
// });
// markerAnchor.addTo(map).on('click', function () {
//   sidebar.toggle(); 
//   document.querySelector(".notification_panel").classList.remove('active');  
//   document.querySelector(".all_vessel_tab").classList.remove('active'); 
//   document.querySelector(".voyage_panel").classList.remove('active');   
// });
// markerStay.addTo(map).on('click', function () {
//   sidebar.toggle(); 
//   document.querySelector(".notification_panel").classList.remove('active');  
//   document.querySelector(".all_vessel_tab").classList.remove('active'); 
//   document.querySelector(".voyage_panel").classList.remove('active');   
// });
// end map sidebar


// panel open
var voyagePanelOpen = document.querySelector(".voyage_link_open");
voyagePanelOpen.addEventListener('click', function voyagePanelOpenFucn () {
  document.querySelector(".voyage_panel").classList.toggle('active');  
  sidebar.hide(); 
  document.getElementById('weather_panel').classList.remove("weather_panel_open");
  document.getElementById('voyage_way_form').classList.remove("voyage_form_close");
  document.getElementById('voyage_way_result').classList.remove("voyage_form_open");
}, false);  

var notificationOpen = document.querySelector(".notification_link_open");
notificationOpen.addEventListener('click', function notificationOpenFucn () {
  document.querySelector(".notification_panel").classList.toggle('active');  
  sidebar.hide(); 
}, false);  

var allVesselTabOpen = document.querySelector(".all_vessel_tab_open");
allVesselTabOpen.addEventListener('click', function allVesselTabOpenFunc () {
  document.querySelector(".all_vessel_tab").classList.toggle('active'); 
  sidebar.hide(); 
}, false);  

var allVesselTabClose = document.querySelector(".all_vessel_tab_close");
allVesselTabClose.addEventListener('click', function allVesselTabCloseFunc () {
  document.querySelector(".all_vessel_tab").classList.toggle('active'); 
}, false);   

var allTabClose = document.querySelector(".voyage_link_map");
allTabClose.addEventListener('click', function allTabCloseFunc () {
  document.querySelector(".all_vessel_tab").classList.remove('active'); 
  document.querySelector(".all_vessel_tab").classList.remove('active'); 
  document.querySelector(".notification_panel").classList.remove('active');  
  document.querySelector(".voyage_panel").classList.remove('active'); 
  document.getElementById('weather_panel').classList.remove("weather_panel_open"); 
  sidebar.hide(); 
}, false);  
// end panel open



// set today date to input date
document.getElementById('date').value = new Date().toISOString().slice(0, 10);
 
function waySearchFunc(){
  var wayFrom = document.getElementById('way_from').value;
  var wayTo = document.getElementById('way_to').value;
  var wayVessel = document.getElementById('way_vessel').value; 
  if(!wayFrom == 0 && !wayTo == 0 && !wayVessel == 0){ 
    // console.log('test'); //[array with valid inputs]

    document.getElementById('voyage_way_form').classList.add("voyage_form_close");
    document.getElementById('voyage_way_result').classList.add("voyage_form_open");
    document.getElementById('voyage_form_back_link').classList.add("voyage_form_back_link_open"); 
    document.getElementById('weather_panel').classList.add("weather_panel_open");
  }
}

function waySearchSnipetFunc(){
  document.querySelector(".voyage_panel").classList.remove('active');  
    document.getElementById('weather_panel').classList.remove("weather_panel_open");
  sidebar.show(); 
} 
function voyage_check_result(){
  var wayFrom = document.getElementById('way_from').value;
  var wayTo = document.getElementById('way_to').value;
  var wayVessel = document.getElementById('way_vessel').value; 
  if(!wayFrom == '0' && !wayTo == '0' && !wayVessel == '0'){   
    document.getElementById('voyage_check_result_btn').classList.add("voyage_check_result_btn_true");  
  }
 };


var voyageFormBackLink = document.getElementById("voyage_form_back_link");
voyageFormBackLink.addEventListener('click', function voyageFormBackLinkFunc () {  
    document.getElementById('voyage_way_form').classList.remove("voyage_form_close");
    document.getElementById('voyage_way_result').classList.remove("voyage_form_open");
    document.getElementById('voyage_form_back_link').classList.remove("voyage_form_back_link_open");
    document.getElementById('weather_panel').classList.remove("weather_panel_open");
}, false); 



var yourApiKey = 'faeeb9b8701d5f1c36c00e9f016cc027';
   
var time = 1631311395;
// var time = 1631314995;
// var time = 1631318595;
// var time = 1631322195;
// var time = 1631325795;
// var time = 1631336595;

var cloudsLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/CL/{z}/{x}/{y}?date='+time+'&palette=0:FFFFFF00;10:FDFDFF19;20:FCFBFF26;30:FAFAFF33;40:F9F8FF4C;50:F7F7FF66;60:F6F5FF8C;70:F4F4FFBF;80:E9E9DFCC;90:DEDEDED8;100:D2D2D2FF;200:D2D2D2FF &opacity=0.3&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
  edgeBufferTiles: 5,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
});  
var windLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/WS10/{z}/{x}/{y}?date='+time+'&opacity=0.3&palette=1:FFFFFF;5:9EB2F6;15:557BFF;25:406AFF;50:2455FF;100:1343EC;200:11225E&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
  edgeBufferTiles: 5,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
}); 
var tempLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date='+time+'&opacity=0.3&palette=-65:C322DB;-55:C322DB;-45:C322DB;-40:C322DB;-30:9765FF;-20:2698FD;-10:20C4E8;0:23DDDD;10:C2FF28;20:FFF028;25:FFC228;30:FC8014&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
  edgeBufferTiles: 5,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
}); 
var rainLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/PAC0/{z}/{x}/{y}?date='+time+'&opacity=0.6&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
  edgeBufferTiles: 5,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
}); 
    
    
    // rainLayer.addTo(map); 
var weatherCloudsPanel = document.getElementById("weather_clouds_panel");
weatherCloudsPanel.addEventListener('click', function weatherCloudsPanelFunc () {   
  if(weatherCloudsPanel.classList.contains('panel_open')){
    weatherCloudsPanel.classList.remove('panel_open')
    cloudsLayer.remove(map); 
  }
  else{
    weatherCloudsPanel.classList.add('panel_open')
    cloudsLayer.addTo(map);  
  }
}, false);

var weatherWindPanel = document.getElementById("weather_wind_panel");
weatherWindPanel.addEventListener('click', function weatherWindPanelFunc () {   
  if(weatherWindPanel.classList.contains('panel_open')){
    weatherWindPanel.classList.remove('panel_open')
    windLayer.remove(map); 
  }
  else{
    weatherWindPanel.classList.add('panel_open')
    windLayer.addTo(map);  
  }
}, false);

var weatherTempPanel = document.getElementById("weather_temp_panel");
weatherTempPanel.addEventListener('click', function weatherTempPanelFunc () {  
  if(weatherTempPanel.classList.contains('panel_open')){
    weatherTempPanel.classList.remove('panel_open')
    tempLayer.remove(map); 
  }
  else{
    weatherTempPanel.classList.add('panel_open')
    tempLayer.addTo(map);  
  }
}, false);

var weatherRainPanel = document.getElementById("weather_rain_panel");
weatherRainPanel.addEventListener('click', function weatherRainPanelFunc () {  
  if(weatherRainPanel.classList.contains('panel_open')){
    weatherRainPanel.classList.remove('panel_open')
    rainLayer.remove(map); 
  }
  else{
    weatherRainPanel.classList.add('panel_open')
    rainLayer.addTo(map);  
  }
}, false);
 
 

// PLAYBACK START
const convertedCoords = coords.map(({ lon, lat }) => [lon, lat]);

function createTimestamps(isPlaybackTimestamps = true) {
    let start = new Date('09.01.2021 10:00:00').getTime();
    const end = new Date('09.01.2021 18:00:00').getTime();
    const intervalValue = isPlaybackTimestamps ?
        Math.ceil((end - start) / (convertedCoords.length - 1)) : 60000 * 10;
    const timestamps = isPlaybackTimestamps ? [start] : [];
    while (start < end) {
        start += intervalValue;
        if (isPlaybackTimestamps) {
            timestamps.push(start);
        } else {
            const timestamp = { playbackInterval: start };
            const { length } = timestamps;
            timestamp.apiInterval = length ? timestamps[length - 1].apiInterval : start;
            timestamp.apiInterval = timestamp.apiInterval + (3 * 3600000);
            timestamps.push(timestamp);
        }
    }

    return timestamps;
}

const timestamps = createTimestamps();
const timestampsIntervals = createTimestamps(false);

const demoRoute = {
    type: 'Feature',
    geometry: {
        type: 'MultiPoint',
        coordinates: convertedCoords,
    },
    properties: {
        time: timestamps,
    }
}; 

 
function onPlaybackTimeChange(event) {
    const findTimestamp = timestampsIntervals.find(item => item.playbackInterval === event);
    if (findTimestamp) {
        const { apiInterval } = findTimestamp;
        // api interval value to pass into OpenWeatherAPI
        callback();  
        var refreshTime = apiInterval/1000;
    console.log(refreshTime);
  

  if($( "#weather_clouds_panel" ).hasClass( "panel_open" )){
      cloudsLayer.remove(map); 
      cloudsLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/CL/{z}/{x}/{y}?date='+refreshTime+'&palette=0:FFFFFF00;10:FDFDFF19;20:FCFBFF26;30:FAFAFF33;40:F9F8FF4C;50:F7F7FF66;60:F6F5FF8C;70:F4F4FFBF;80:E9E9DFCC;90:DEDEDED8;100:D2D2D2FF;200:D2D2D2FF &opacity=0.3&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/dark-v10',
        // tileSize: 256,
        zoomControl: false,
        edgeBufferTiles: 5,
        accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
        style: 'mapbox://styles/mapbox/dark-v10', 
      });  
        cloudsLayer.addTo(map);
  }
  if($( "#weather_rain_panel" ).hasClass( "panel_open" )){ 
      rainLayer.remove(map);    
        rainLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/PAC0/{z}/{x}/{y}?date='+refreshTime+'&opacity=0.6&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/dark-v10',
        // tileSize: 256,
        zoomControl: false,
        edgeBufferTiles: 15,
        accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
        style: 'mapbox://styles/mapbox/dark-v10', 
    }); 
        rainLayer.addTo(map); 
  }

  if($( "#weather_temp_panel" ).hasClass( "panel_open" )){ 
      tempLayer.remove(map);
      tempLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date='+refreshTime+'&opacity=0.3&palette=-65:C322DB;-55:C322DB;-45:C322DB;-40:C322DB;-30:9765FF;-20:2698FD;-10:20C4E8;0:23DDDD;10:C2FF28;20:FFF028;25:FFC228;30:FC8014&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: 'mapbox/dark-v10',
          // tileSize: 256,
          zoomControl: false,
          edgeBufferTiles: 5,
          accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
          style: 'mapbox://styles/mapbox/dark-v10', 
      }); 
      tempLayer.addTo(map);
  }

  if($( "#weather_wind_panel" ).hasClass( "panel_open" )){ 
      windLayer.remove(map);
      windLayer = L.tileLayer('http://maps.openweathermap.org/maps/2.0/weather/WS10/{z}/{x}/{y}?date='+refreshTime+'&opacity=0.3&palette=1:FFFFFF;5:9EB2F6;15:557BFF;25:406AFF;50:2455FF;100:1343EC;200:11225E&appid=faeeb9b8701d5f1c36c00e9f016cc027', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          id: 'mapbox/dark-v10',
          // tileSize: 256,
          zoomControl: false,
          edgeBufferTiles: 5,
          accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
          style: 'mapbox://styles/mapbox/dark-v10', 
      }); 
        windLayer.addTo(map); 
      } 
    }
}
 

function callback() {  
}
const playbackOptions = {
    playControl: true,
    dateControl: true,
    sliderControl: true,
    orientIcons: true,
    speed: 5,
};

new L.Playback(map, [demoRoute], onPlaybackTimeChange, playbackOptions);

const controls = document.querySelectorAll('.leaflet-control-layers.leaflet-control-layers-expanded.leaflet-control');
const gpsTracksControl = controls[0];
const playControl = controls[3];
[gpsTracksControl, playControl].forEach(control => {
    control.style.marginRight = '5rem';
});
// PLAYBACK FINISH
 

  
// custom Tabs
var d = document,
  tabs = d.querySelector('.sidebar_tabs'),
  tab = d.querySelectorAll('.sidebar__li'),
  contents = d.querySelectorAll('.tabs__content');
  if(tabs){
    tabs.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
    // change tabs
    for (var i = 0; i < tab.length; i++) {
      tab[i].classList.remove('active');
    }
    e.target.classList.toggle('active');


    // change content
    for (i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
    }

    var tabId = '#' + e.target.dataset.tabId;
      d.querySelector(tabId).classList.toggle('active'); 
    }  
  });  
}
var d = document,
  tabs = d.querySelector('.tabs'),
  tab = d.querySelectorAll('li'),
  contents = d.querySelectorAll('.tabs__content');
if(tabs){
  tabs.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
  // change tabs
    for (var i = 0; i < tab.length; i++) {
      tab[i].classList.remove('open');
    }
    e.target.classList.toggle('open');


    // change content
    for (i = 0; i < contents.length; i++) {
      contents[i].classList.remove('open');
    }

    var tabId = '#' + e.target.dataset.tabId;
      d.querySelector(tabId).classList.toggle('open'); 
    }  
  });
}
//end  custom Tabs
 
// custom sortTable 
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector(".custom_table");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
} 
// end custom sortTable 


// custom-select 
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// end custom Select
 
// hover link right panel
function lonkHoverActive(elem) {
    var a = document.getElementsByClassName("left_panel__link")
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.toggle('active');
}
 