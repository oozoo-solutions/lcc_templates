    (function (global) {
    "use strict";
    var LCC = global.LCC || {};
	    LCC.ResponsiveDesign = LCC.ResponsiveDesign || {};

    $(document).ready(function () {
        LCC.ResponsiveDesign.activate();
    });

    LCC.ResponsiveDesign.activate = function () {
        //main menu
        $('a.main-menu').click(function() {
            $('#main-menu').toggleClass("active");
            $(this).toggleClass("active");
            $('#main-menu ul.root li:nth-child(1) a').addClass("firstItem");
            $('#main-menu ul.root li ul li a').removeClass("firstItem");
            $('#main-menu ul.root li a.firstItem').focus();
        });
    
        //search toggle
        $('a.search').click(function() {
            $('#nav-search').toggleClass("active");
            $(this).toggleClass("active");
            $('#nav-search input').focus();
        });

        $(window).load(function() {
             equalheight('.equal-item');
        });

        $(window).resize(function(){
             equalheight('.equal-item');
        });

        //equal heights
        var equalheight = function(container){
            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el,
                topPosition = 0;

            $(container).each(function() {
                $el = $(this);
                $($el).height('auto')
                topPostion = $el.position().top;

                if (currentRowStart != topPostion) {
                    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }
    }
   global.LCC = LCC;
})(window)