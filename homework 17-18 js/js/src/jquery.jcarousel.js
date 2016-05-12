(function($){

    $.fn.carouselJS = function(options){



        var defaults = {
            color: 'green',
            backgroundColor: 'lightgrey',
        } 
        /*console.log('defaults', defaults);
        console.log(this);*/
         $('.carousel-arrow-right').css('color', defaults.color);
       /* $(this).css('color', defaults.color);*/
        /*console.log('options', options);*/
        var settings = $.extend(defaults, options);
        /*console.log('settings', settings);*/
         $(this).css('color', defaults.color);


       


       var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
     
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
     
        leftUIEl.click(function() {        
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });
     
        rightUIEl.click(function() {        
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }        
        });
    };

})(jQuery);