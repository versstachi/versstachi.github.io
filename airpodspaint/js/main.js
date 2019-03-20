$(document).ready(function () {

    /**Scroll animation on top menu**/
    $('#page-navigation').on("click", "a", function (e) {
        e.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якор
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.scroll-button').on("click", function (e) {
        e.preventDefault();
        var id = $(this).data('target'),
            //узнаем высоту от начала страницы до блока на который ссылается якор
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


    /**Hide top menu on any click**/
    $(document).on('click', function () {
        $('.collapse').collapse('hide');
    });

    $(".color").each(function () {
        var color = $(this).data('color');
        $(this).css('background-color', color);
    });


    /**Logic of change color**/

    function toggleActive(colorItem) {
        colorItem.parent().find('.active').removeClass('active');
        colorItem.addClass('active');

    }

    function changeImage(imageWrapper, imageUrl) {
        imageWrapper.find('img').remove();
        $('<img src="images/products/' + imageUrl + '" class="img-fluid">').hide().appendTo(imageWrapper).fadeIn(500);
    }

    /**Prevent jumping price when hide img element**/
    var headImageHeight = $('.h-phones-image').find('img').height();
    $('.h-phones-image').css('min-height', headImageHeight);
    var caseImageHeight = $('.case-image').find('img').height();
    $('.case-image').css('min-height', caseImageHeight);

    var selectedProduct = $('.selected-product');
    var selectedColor = selectedProduct.data('selected-product');
    var selectedCase = selectedProduct.data('selected-case');
    var selectedHead = selectedProduct.data('selected-head');
    var glanPrice = selectedProduct.data('glan-price');;

    var selectedPaleteCaseItem = $('.case-palette').find('[data-color="' + selectedColor + '"]');
    var selectedPaleteHeadItem = $('.head-palette').find('[data-color="' + selectedColor + '"]');
    toggleActive(selectedPaleteCaseItem);
    toggleActive(selectedPaleteHeadItem);
    console.log(selectedHead);
    changeImage($('.case-image'), selectedCase);
    changeImage($('.h-phones-image'), selectedHead);

    $('.color').on('click', function () {
        if ($(this).hasClass('d-inline-block')) {
            return
        }
        var color = $(this).data('color');
        console.log(color);
        if ($(this).parent().hasClass('case-palette')) {
            var radioVar = $('.case-radio').find("input:radio:checked").val();
            var imageWrapper = $('.case-image');
            $('#case_color').attr('value', color);
            $('.case_color_form').css('background-color', color);
        } else {
            var radioVar = $('.head-radio').find("input:radio:checked").val();
            var imageWrapper = $('.h-phones-image');
            $('#headphones_color').attr('value', color);
            $('.head_color_form').css('background-color', color);
        }

        if (radioVar == 'm') {
            var imageUrl = $(this).data('mat');
        } else {
            var imageUrl = $(this).data('glan');
        }

        toggleActive($(this));
        changeImage(imageWrapper, imageUrl);
    });

    function changeSurfaceText(radioVar, radioName) {
        if (radioVar == 'm') {
            if (radioName === 'case-optradio') {
                $('.case_surface_form').find('span').text('Матовый');
            } else {
                $('.head_surface_form').find('span').text('Матовый');
            }

        } else {
            if (radioName === 'case-optradio') {
                $('.case_surface_form').find('span').text('Глянцевый');
            } else {
                $('.head_surface_form').find('span').text('Глянцевый');
            }
        }

    }
    function updatePrice() {
        priceElem.find('p').hide();
        priceElem.find('p').text(price + ' Р').fadeIn(400);

        priceInput.find('p').text(price + 'Р');
        priceInput.find('input[name=price]').attr('value', price);
    }

    var priceInput = $('.price-input');
    var priceElem = $('.price');
    var price = priceElem.data('price');
    var checkBoxPrice = $('input[name=have-air]');
    var discount = checkBoxPrice.data('discount');

    $('.radio-buttons').find('input:radio').on('change', function () {
        var radioVar = $(this).val();
        var radioName = $(this).attr('name');
        if (radioName === 'case-optradio') {
            var selectedColor = $('.case-palette').find('.active');
            var imageWrapper = $('.case-image');
            $('#case_surface').attr('value', radioVar);
        } else {
            var selectedColor = $('.head-palette').find('.active');
            var imageWrapper = $('.h-phones-image');
            $('#head_surface').attr('value', radioVar);
        }

        changeSurfaceText(radioVar, radioName);

        if (radioVar == 'm') {
            var imageUrl = selectedColor.data('mat');
            price -= glanPrice;
            updatePrice();
        } else {
            var imageUrl = selectedColor.data('glan');
            price += glanPrice;
            updatePrice();
        }

        changeImage(imageWrapper, imageUrl);
    });


    /**I have airpods checkbox**/

    checkBoxPrice.on('change', function () {

        $('.have-airpods').toggleClass('d-none');

        if ($(this).prop('checked')) {
            price -= discount;
            $('#airpods').attr('value', 1);
        } else {
            price += discount;
            $('#airpods').attr('value', 0);
        }
        updatePrice();
    });



    /**Load personal image**/
    var loadFileElem = $('#loadFile');
    var inputFile = loadFileElem.find('#inputFile');
    var picturePrice = inputFile.data('picture-price');
    var pictureSelected = false;
    inputFile.on('change', function () {
        var filename = inputFile.val().split('\\').pop();
        /*console.log(filename);*/
        if (filename) {
            loadFileElem.find('label').html(filename);
            if (!pictureSelected) {
                price += picturePrice;
                pictureSelected = true;

                $('.have-print').toggleClass('d-none');

                updatePrice();
            }
        }

    });


    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    $('.customer-photo').css('backgroundImage', 'url(' + e.target.result + ')')

                    $('.have-print').append('<img src="' + e.target.result + '" />')
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

    document.getElementById('inputFile').addEventListener('change', handleFileSelect, false);

    /** Для настройки AJAX в laravel **/
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    /**Create order**/
    $('.order-form').submit(function (e) {
        e.preventDefault();
        /*var str = $(this).serialize();*/
        var formData = new FormData($(this)[0]);
        $('.modal').modal('hide');
        $.ajax({
            beforeSend: function () {
                $('.modal1').modal('show');
            },
            complete: function () {
                $('.modal1').modal('hide');
            },
            type: "POST",
            url: "mail.php",
            data: formData,
            cache: false,
            processData: false,
            contentType: false,
            success: function () {
                /*yaCounter48950861.reachGoal('zakaz');*/
                $('#status-message').find('.modal-body').html('<p>В ближайшее время мы с Вами свяжемся для подтверждения заказа</p>');
                $('#status-message').modal('show');
            },
            error: function () {
                /*yaCounter48950861.reachGoal('zakaz');*/
                $('#status-message').find('.modal-body').html('<p>К сожалению, при отправке письма возникла ошибка. Пожалуйста, свяжитесь с нами одним из способов, которые указаны в разделе Контакты</p>');
                $('#status-message').modal('show');
            }
        });
    });

    $('#inst-button').on('click', function () {
        yaCounter48950861.reachGoal('instagram');
    });

    /**Make resolution video 16:9**/
    var video = $('.video iframe');
    var widthVideo = video.width();
    video.height(widthVideo * 9 / 16);


    /**Instagram header**/
    var instaWidth = $('.instagram-section iframe').width();
    $('.instagram-header').width(instaWidth);


    /**Autostop Youtube video, when closed modal form**/
    $('.review-video-wrapper iframe').addClass("youtube-iframe");
    $('.modal').on('hide.bs.modal', function (e) {
        $('.youtube-iframe').each(function (index) {
            $(this).attr('src', $(this).attr('src'));
            return false;
        });
    })

    });

/**Config and load google map**/
function initMap() {
    var address = {lat: 55.7408078, lng: 37.4152942};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        /*center: address,*/
        center: new google.maps.LatLng(55.7408078, 37.40452942),
        styles: [
            {
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#bdbdbd'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dadada'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#c9c9c9'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: address,
        map: map
    });

}