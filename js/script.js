$(document).ready(function() {
    // $("#single_1,#single_2").fancybox({
    // 	openEffect	: 'elastic',
    // 	closeEffect	: 'elastic',

    // 	helpers : {
    // 		title : {
    // 			type : 'inside'
    // 		}
    // 	}
    // });
    $('.parallax-layer').parallax({
            mouseport: $(".header"),
            yparallax: false,
         	
    },
    {xparallax: '0'},
    {xparallax: '110px'},
    {xparallax: '200px'},
    {xparallax: '100px'}
    );

});