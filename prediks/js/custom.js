 // includeHTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();
// includeHTML

// scrollContainer
const scrollContainer = document.querySelector(".assets .dashboard_content_total_info");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
// 

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// custom Tabs
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

document.addEventListener('DOMContentLoaded', function() {
setTimeout(function(){
   var popTooltip = document.getElementsByClassName("pop_tooltip_link"); 
      var popUpTooltip = document.getElementsByClassName("pop_tooltip");
   if(popUpTooltip.length){
   var popTooltipFunction = function() { 
         // console.log("test");  
         // console.log(document.getElementById("pop_tooltip").length);  
         //  document.getElementById("pop_tooltip").setAttribute("style", "display:block;") 
         // document.getElementById("pop_tooltip").classList.add('show');
   }; 
   for (var i = 0; i < popTooltip.length; i++) {
       popTooltip[i].addEventListener('click', popTooltipFunction, false);
   }

   } 

    var assetsTooltipElem = document.getElementsByClassName("assets_info_tooltip"); 
    var assetsElemClose =  document.getElementsByClassName("assets_info_tooltip_hover");
    for(let i = 0;i<assetsTooltipElem.length; ++i ){ 
      assetsTooltipElem[i].addEventListener("click", function () {     
        assetsTooltipElem[i].classList.toggle("assetsTooltip"); 
      });
    } 

//     var elements = document.getElementsByClassName("assets_info_tooltip_hover");

// var myFunction = function() {
//          console.log("test");  
//     // var attribute = this.getAttribute("data-myattribute");
//     // alert(attribute);
// };

// for (var i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }

}, 1000); 
 
});