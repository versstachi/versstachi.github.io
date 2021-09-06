var testData = {
  max: 8,
  data: [
          {lat: 51.75, lng:-13.55, count: 3},{lat: 50.75, lng:-1.55, count: 1},
          {lat: 58.75, lng:-1.55, count: 3},{lat: 58.75, lng:-21.55, count: 1},
          {lat: 53.75, lng:-11.55, count: 1},{lat: 59.75, lng:-21.55, count: 3},
        ]
}; 

// var map = L.map('mapid').setView([50.80925310310907, -0.1361937699561519], 3);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 20,
//     id: 'mapbox/dark-v10',
//     tileSize: 256,
//     zoomControl: false,
//     accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
//     style: 'mapbox://styles/mapbox/dark-v10',
//     layers: [baseLayer, heatmapLayer]
// }).addTo(map); 

var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/dark-v10',
    tileSize: 256,
    zoomControl: -1,
    accessToken: 'pk.eyJ1IjoidmVyc3N0YWNoaSIsImEiOiJja3Q1bjI1OG0wYTB1MndwaG0wZTI0eG0yIn0.KW23CHoSsSdBk52ntlTaRA',
    style: 'mapbox://styles/mapbox/dark-v10',
    layers: [baseLayer, heatmapLayer]
});

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 2,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
}; 

var heatmapLayer = new HeatmapOverlay(cfg); 

var map = new L.Map('mapid', {
  center: new L.LatLng(25.6586, -80.3568),
  zoom: 3,
  layers: [baseLayer, heatmapLayer]
});

map.removeControl(map.zoomControl); 

heatmapLayer.setData(testData);
map.on('zoomend', function () {
    if (map.getZoom() > 5 && map.hasLayer(heatmapLayer)) {
        map.removeLayer(heatmapLayer);
    }
    if (map.getZoom() < 5 && map.hasLayer(heatmapLayer) == false)
    {
        map.addLayer(heatmapLayer);
    }   
});
var marker = L.marker([51.63015157454955, 2.6431482992641033], {
  icon: L.divIcon({
      html: "<div class='marker__image'><img src='img/marker-icon.png' alt=''></div>MSC SEASIDE<div class='popup'>Catanzaro<img src='img/arrow-forward-poup.svg' alt=''>Taranto<div class='popup_status'>Normal</div></div>",
      className: 'text-below-marker',
    })
  }).addTo(map);
// }).addTo(map).bindTooltip("<img src='img/marker-icon.png' alt=''>");

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
   

var sidebar = L.control.sidebar('sidebar', {
    closeButton: true,
    position: 'left',
    container: 'sidebar',
});
    map.addControl(sidebar);
    marker.addTo(map).on('click', function () {
    sidebar.toggle(); 
    document.querySelector(".notification_panel").classList.remove('active');  
    document.querySelector(".all_vessel_tab").classList.remove('active'); 
  document.querySelector(".voyage_panel").classList.remove('active');  
});
 
var curve1 = L.pathCurve([6.0190194670789925, -85.9360786885477], [51.63015157454955, 2.6431482992641033]).addTo(map);
     

map.on('click', function(e) { 
curve1 = L.pathCurve([e.latlng.lat,e.latlng.lng], [51.63015157454955, 2.6431482992641033]).addTo(map);
  
});

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


var notificationOpen = document.querySelector(".voyage_link_open");
notificationOpen.addEventListener('click', function notificationOpenFucn () {
  document.querySelector(".voyage_panel").classList.toggle('active');  
    sidebar.hide(); 
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