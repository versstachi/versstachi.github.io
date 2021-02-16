document.addEventListener('DOMContentLoaded', function() { // == $ document.ready

	var $ = document.querySelector.bind(document);

	// показ результатов поиска при вводе 3х знаков
	var search = $('#search-input'),
		searchResults = $('.search-modal-result'),
		modalTop = $('.search-modal .modal-footer');

	function onSearchInput()
	{
		var searchText = search.value.replace(/\s+/g, '');

		if(searchText.length == 3) {
			searchResults.classList.add('show-search-result');
			modalTop.classList.add('show-top');
		}
		/* if(searchText.length > 2) {
			// Здесь можно сделать ajax запрос
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'контроллер.php', true);
			xhr.onload = function() {
				if (this.status == 200) {
					// Елемент.innerText = this.responseText;
				} else if (this.status == 404) {
					// Елемент.innerText = 'Not found';
				}						
			}
			xhr.onerror = function() {
				console.log('Request error...');
			}	
			xhr.send();
		} */
	}

	search.addEventListener('input', onSearchInput);
	// END показ результатов поиска при вводе 3х букв


	// Установка курсора в поиск
	var searchModal = $('#SearchModal');

	function setSearchFocus() {
		search.focus();
	}

	searchModal.addEventListener('focus', setSearchFocus)
	// END Установка курсора в поиск


	// Скрытие навигации и плавающий банер
	var header = $('header'),
		headerHeight = header.offsetHeight,
		switchNavBar = true,
		scrollDirDown = true,
		prevScrollpos = window.pageYOffset,
		hideStartPoint,
		hideMenuHeight,
		floatingBanner = $('.promo-box.desctop-version.floating-banner');
		
	// определение мобильные/десктоп для скрытия навигации
	hideStartPoint = (window.innerWidth < 767) ? 300 : 670;


	document.addEventListener('scroll', function() {
		
		var currentScrollPos = window.pageYOffset;
		var scrollDirDown = (prevScrollpos > currentScrollPos) ? false : true;
		prevScrollpos = currentScrollPos;
		hideMenuHeight = hideStartPoint - currentScrollPos;

		// скрытие навигации и плавающий баннер
		if (scrollDirDown && hideMenuHeight < headerHeight && switchNavBar) {
			header.style.top = - headerHeight + 'px';
			header.classList.add('imc-header-scroll-hidden');
			switchNavBar = !switchNavBar;
			if (floatingBanner != undefined) {
				floatingBanner.classList.add('scrolled-banner');
			}
		}
		if (!scrollDirDown && !switchNavBar) {
			header.style.top = 0;
			header.classList.remove('imc-header-scroll-hidden');
			switchNavBar = !switchNavBar;	
			if (floatingBanner != undefined) {
				floatingBanner.classList.remove('scrolled-banner');
			}
		}
		// END Скрытие навигации и плавающий баннер
	});	 
// textarea auto height 
function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
};
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding: 1px 0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


var searchModal = $('#SearchModal-call');
searchModal.addEventListener('click', offsetTime)
function offsetTime() {
  myVar = setTimeout(searchModalCall, 500);
} 
function searchModalCall() {
var myModal = new bootstrap.Modal(document.getElementById("SearchModal"), {});
  myModal.show();
}
});
