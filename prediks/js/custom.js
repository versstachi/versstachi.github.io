 
document.addEventListener("DOMContentLoaded", ready);

function ready() {
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
  if (scrollContainer) {

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
  }
  //  


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

  var assetsTooltipElem = document.getElementsByClassName("assets_info_tooltip"); 
  var assetsElemClose =  document.getElementsByClassName("assets_info_tooltip_hover");
  for(let i = 0;i<assetsTooltipElem.length; ++i ){ 
    assetsTooltipElem[i].addEventListener("click", function () {     
      // assetsTooltipElem[i].classList.toggle("assetsTooltip"); 
      var assetsTooltipElemHover = assetsTooltipElem[i].querySelector('.assets_info_tooltip_hover')  
      assetsTooltipElemHover.classList.toggle("active");
    });
  } 

  // var assetsTooltipClose = document.getElementsByClassName("assets_request_close");    
  // for(let i = 0;i<assetsTooltipClose.length; ++i ){ 
  //   assetsTooltipClose[i].addEventListener("click", function () {     
  //     var assetsTooltipCloseParent = assetsTooltipClose[i].parentNode.parentNode;  
  //     console.log(assetsTooltipCloseParent);    
  //     assetsTooltipCloseParent.classList.toggle("active");
  //   });
  // } 


  // Get the modal
  var modal = document.getElementById("add_new_asset_modal");

  // Get the button that opens the modal
  var btn = document.getElementById("add_new_asset");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("modal_close")[0];

  // Get the <span> element that closes the modal
  var spanFooter = document.getElementsByClassName("modal_footer_close")[0];

  // When the user clicks the button, open the modal 
  if(btn){ 
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  // When the user clicks on <span> (x), close the modal
  if(span){ 
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  // When the user clicks on <span> (x), close the modal
  if(spanFooter){ 
    spanFooter.onclick = function() {
      modal.style.display = "none";
    }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Selecting all CheckBoxes

  function selects(){    
    var checkbox = document.getElementById('allselect').checked;
    var ele=document.getElementsByName('chk');  
    if(checkbox == true){
        for(var i=0; i<ele.length; i++){   
          ele[i].checked=true;  
        } 
    }else{  
        for(var i=0; i<ele.length; i++){   
          ele[i].checked=false;  
        } 
    }   
  }   

   
  setTimeout(function(){
      var dashboardElem = document.getElementById('dashboard_map'); 
      if (dashboardElem) {
        var dashboardTop = dashboardElem.offsetTop;  
      } 

      var popTooltipLink = document.getElementsByClassName("pop_tooltip_link");  
      var assetsInfoTooltipHover = document.getElementsByClassName("dashboard_assets_info_tooltip_hover");  
      for(let i = 0;i<popTooltipLink.length; ++i ){ 
        popTooltipLink[i].addEventListener("click", function () {     
          var popTooltipLinkTarget = popTooltipLink[i].getAttribute('data-target');
          var assetsInfoTooltipHoverTarget = assetsInfoTooltipHover[i].getAttribute('data-hover'); 
          if (popTooltipLinkTarget == assetsInfoTooltipHoverTarget) {
          console.log(popTooltipLinkTarget); 
          console.log(assetsInfoTooltipHoverTarget);   

            // var popTooltipLink_2 = document.getElementById('pop_tooltip_link_2'); 
            // var popTool_2 = document.getElementById('pop_tooltip_2'); 
       
            var currentChildTop = popTooltipLink[i].getBoundingClientRect().top  + (window.pageYOffset || popTooltipLink[i].scrollTop || 0);   
            var scrolledParentDistance = Math.abs(currentChildTop - dashboardTop) -124;

            var popTooltipLinkLeft = popTooltipLink[i].getBoundingClientRect().right-225; 
            var popTooltipLinkLeftDistance = Math.abs(popTooltipLinkLeft - popTooltipLinkLeft); 

            assetsInfoTooltipHover[i].style.top = scrolledParentDistance+'px'; 
            assetsInfoTooltipHover[i].style.left = popTooltipLinkLeft+'px'; 
            assetsInfoTooltipHover[i].style.display="block"; 


          }
        });


      } 
   
      var popTooltipClose = document.getElementsByClassName("assets_tooltip_hover_close");    
      for(let i = 0;i<popTooltipClose.length; ++i ){ 
        popTooltipClose[i].addEventListener("click", function () {     
          var popTooltipCloseParent = popTooltipClose[i].parentNode.parentNode;  
          popTooltipCloseParent.style.display="none";
        });
      } 
  }, 500);   

}