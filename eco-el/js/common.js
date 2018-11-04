jQuery(function() {

    jQuery(".spoil-btn").on('click', function(){
    	jQuery(".spoil-resp").toggle("show", 500);
    });
});
jQuery(function (f) {
    f(window).scroll(function () {
        f('#menu')[
            (f(this).scrollTop() > 55 ? "add" : "remove") + "Class"
            ]("menu_fixed");
    });
    jQuery(document).ready(function(){
        jQuery(document).snowfall({
            flakeCount: 300, 
            minSize: 1, 
            maxSize: 5,
            round: true,
            shadow: false,
        });
    });

//     $(function(){
// $('a[href^="#"]').click(function(){
// var target = $(this).attr('href');
// $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
// return false; 
// }); 
// });
 


});