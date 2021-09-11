 
var map = L.map('mapid').setView([50.80925310310907, -0.1361937699561519], 3);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    // tileSize: 256,
    zoomControl: false,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10', 
}).addTo(map); 

map.options.maxZoom = 20;
map.options.minZoom = 3;
map.removeControl(map.zoomControl);  

var markerIcon = L.divIcon(
  {
  html: `
  <div class='marker__image'><img src='img/marker-icon.png' alt=''></div>
  <div class='marker__image_container normal'>
    <div class='marker__image_label'>
      <div class='marker__image_title'>MSC SEASIDE</div>
      <div class='marker__label__status'>Under way</div>  
    </div>
    <div class='popup'>Catanzaro<img src='img/arrow-forward-poup.svg' alt=''>Taranto<div class='popup_status'>Normal</div></div>
  </div>
  `,
  className: 'marker-label',
});

var marker = L.marker([23.135044427508504, -82.42811672821004],
 {icon: markerIcon}).addTo(map).on('click', clickZoom);

function clickZoom(e) {
    map.setView(e.target.getLatLng(),5);
}

map.on('popupopen', function(e) {
    // find the pixel location on the map where the popup anchor is
    var px = map.project(e.popup._latlng);
   // find the height of the popup container, divide by 2 to centre, subtract from the Y axis of marker location
    px.y -= e.popup._container.clientHeight/2;
    // pan to new center
    map.panTo(map.unproject(px),{animate: true});
});

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
marker.addTo(map).on('click', function () {
  sidebar.toggle(); 
  document.querySelector(".notification_panel").classList.remove('active');  
  document.querySelector(".all_vessel_tab").classList.remove('active'); 
  document.querySelector(".voyage_panel").classList.remove('active');  
});
// end map sidebar

var markers = [
    {
        coords:[52.3680678593176, 5.026515440336008],
      },
    {
        coords:[42.33975833769053, -70.98629466906411],
      }, 
];
// Edit marker icons
// var myIcon = L.icon({
//     iconUrl: 'img/marker-icon.png',
//     iconSize: [40, 40], // size of the icon
//     // iconAnchor: [],
//     // popupAnchor: [],
// });
var myIcon = L.divIcon(
  {
  html: `
  <div class='marker__image'><img src='img/marker-icon-1.png' alt=''></div>
  <div class='marker__image_container stay'>
    <div class='marker__image_label'>
      <div class='marker__image_title'>BUNGA LOTUS</div>
      <div class='marker__label__status'>Under way</div>  
    </div>
    <div class='popup'>Catanzaro<img src='img/arrow-forward-poup.svg' alt=''>Taranto<div class='popup_status'>Normal</div></div>
  </div>
  `,
  className: 'marker-label',
});
// Loop through markers
for(var i = 0; i<markers.length; i++){
    addMarker(markers[i]);
}
// To add the marker coordinates
function addMarker(props){
    var marker = L.marker(props.coords, {icon: myIcon}).addTo(map);
     marker.on('mouseover', function(e){
        marker.openPopup(); 
    });
    marker.on('mouseout', function(e){
        marker.closePopup();
    }); 
}
// var curve1 = L.pathCurve([6.0190194670789925, -85.9360786885477], [51.63015157454955, 2.6431482992641033]).addTo(map);
     

// map.on('click', function(e) { 
// curve1 = L.pathCurve([e.latlng.lat,e.latlng.lng], [51.63015157454955, 2.6431482992641033]).addTo(map);
  
// });

// custom Tabs
var d = document,
    tabs = d.querySelector('.sidebar_tabs'),
    tab = d.querySelectorAll('.sidebar__li'),
    contents = d.querySelectorAll('.tabs__content');
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

var d = document,
    tabs = d.querySelector('.tabs'),
    tab = d.querySelectorAll('li'),
    contents = d.querySelectorAll('.tabs__content');
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
//end  custom Tabs

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



var yourApiKey = '06aac0fd4ba239a20d824ef89602f311';
  
var clouds = L.OWM.clouds({showLegend: true, opacity: 0.5, appId: yourApiKey}); 
var cloudscls = L.OWM.cloudsClassic({showLegend: true,opacity: 0.5,appId: yourApiKey});
var precipitation = L.OWM.precipitation({appId: 'YOUR_OWN_APPID'});
var precipitationcls = L.OWM.precipitationClassic({opacity: 0.5,appId: yourApiKey});
var rain = L.OWM.rain({appId: 'YOUR_OWN_APPID'});
var raincls = L.OWM.rainClassic({opacity: 0.5,appId: yourApiKey});
var snow = L.OWM.snow({opacity: 0.5,appId: yourApiKey});
var pressure = L.OWM.pressure({appId: 'YOUR_OWN_APPID'});
var pressurecntr = L.OWM.pressureContour({opacity: 0.5,appId: yourApiKey});
var temp = L.OWM.temperature({opacity: 0.5,appId: yourApiKey});
var wind = L.OWM.wind({opacity: 0.5,appId: yourApiKey});


var weatherCloudsPanel = document.getElementById("weather_clouds_panel");
weatherCloudsPanel.addEventListener('click', function weatherCloudsPanelFunc () {   
  if(weatherCloudsPanel.classList.contains('open')){
    weatherCloudsPanel.classList.remove('open')
    cloudscls.remove(map); 
  }
  else{
    weatherCloudsPanel.classList.add('open')
    cloudscls.addTo(map);  
  }
}, false);

var weatherWindPanel = document.getElementById("weather_wind_panel");
weatherWindPanel.addEventListener('click', function weatherWindPanelFunc () {   
  wind.addTo(map);   
  if(weatherWindPanel.classList.contains('open')){
    weatherWindPanel.classList.remove('open')
    wind.remove(map); 
  }
  else{
    weatherWindPanel.classList.add('open')
    wind.addTo(map);  
  }
}, false);

var weatherTempPanel = document.getElementById("weather_temp_panel");
weatherTempPanel.addEventListener('click', function weatherTempPanelFunc () {   
  temp.addTo(map);   
  if(weatherTempPanel.classList.contains('open')){
    weatherTempPanel.classList.remove('open')
    temp.remove(map); 
  }
  else{
    weatherTempPanel.classList.add('open')
    temp.addTo(map);  
  }
}, false);
 