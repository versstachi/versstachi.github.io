 
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
 