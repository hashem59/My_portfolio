(function() {

    //    console.log(document.visibilityState);

    window.onload = function() {
        "use strict";

    var n;
    var string1 = "I'm Hashem Ramdan";
    var string2 = "I'm a front-end web developer";


    function addtxt() {

        for (n = 0; n < string1.length; n++) {
            $("#hd-words").append("<span id='a" + n + "'>" +
                (string1[n] == " " ? "&nbsp;" : string1[n]) +
                "</span>");
            $("#a" + n + "").delay(n * 90).queue(function(next) {
                $(this).css({
                    "opacity": "1"
                });
                next();
            });
        };


    };
    addtxt();

    function dela() {
        setTimeout(function() {
                $("#hd-words span").remove();
            },
            1900);
    };
    dela();

    function re1add() {
        setTimeout(function() {
            for (var x = 0; x < string2.length; x++) {
                $("#hd-words2").append("<span id='b" + x + "'>" +
                    (string2[x] == " " ? "&nbsp;" : string2[x]) +
                    "</span>");
                $("#b" + x + "").delay(x * 90).queue(function(next) {
                    $(this).css({
                        "opacity": "1",
                    });
                    next();
                });
            };
        }, 1950);


    };

    re1add();

    var visibiltyarray = [];

    document.addEventListener("visibilitychange", function() {
        visibiltyarray.push(document.visibilityState);
        console.log(visibiltyarray);
        if (visibiltyarray[0] == "visible" && visibiltyarray.length == "1") {
            $("#hd-words span").remove();
            $("#hd-words2 span").remove();
            addtxt();

            dela();

            re1add();

        };

        // console.log( document.visibilityState );

    });
    };





    // Responsive Menu
    if ($(window).width() < 600) {
        $(".nvb-left").attr("id", "mobile-demo");
    };

    //Navigate between pages

    var menue_items = $(".side-menu li");

    //    console.log(menue_items.length);

    var pages = $(".main-page");

    //    console.log(pages[2]);


        menue_items.click( function toggleItem(event) {

            event.preventDefault();
            
            var index = $(this).index();
            console.log(index);

            for (var z = 0; z < pages.length; z++) {
                pages[z].style.display = "none";

            }
            
            
            pages[index].style.display = "block";
            
        });

    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();
    




})(jQuery);