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
    $('.parallax-layer').parallax(
        {mouseport: $("body"), yparallax: false},
        {xparallax: '0'},
        {xparallax: '110px'},
        {xparallax: '200px'},
        {xparallax: '160px'},
        {xparallax: '0px'}
    );

});