$(document).ready(function(){
    $('.menu').click(function(){
        $('.default-menu-image').toggleClass('d-none');
        $('.active-menu-image').toggleClass('d-none');
        $('.menus').toggleClass('open');
    });
    
    var position = $(window).scrollTop();
    $(window).scroll(function() {
        var main__header = document.querySelector(".header");
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            main__header.classList.add("hidden_top");
        }else{
            main__header.classList.remove("hidden_top");
        }
        position = scroll;
        if(window.pageYOffset >= 200) {
            main__header.classList.add("fixed_top"); 
        }else{
            main__header.classList.remove("fixed_top");
        }
        
    });

    $('.add').click(function () {		
        var th = $(this).closest('.wrap-quantity-button').find('.count');    	
        th.val(+th.val() + 1);
    });
    $('.sub').click(function () {
        var th = $(this).closest('.wrap-quantity-button').find('.count');    	
        if (th.val() > 0) th.val(+th.val() - 1);
    });
});