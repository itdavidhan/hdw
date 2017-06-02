define([], function() {
    return {
        init: function() {
            var href = window.location.href;
            var $navbar = $('.navbar');
            var $nav = $navbar.find('.navbar-nav');
            var $li = $nav.children('li'); 

            if(href.indexOf('index') !== -1) {
                $li.removeClass('active').siblings('._index').addClass('active');
            } else if(href.indexOf('blog') !== -1) { 
                $li.removeClass('active').siblings('._blog').addClass('active');
            }
        }
    }
});