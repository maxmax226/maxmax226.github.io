var $window = $(window);


function changeColor(element, ratio, from_color, to_color) {
    //if the element is icon need to change -background-clip to show gradient
    // element.css("background",
    //     "linear-gradient(180deg,  " + to_color + "  0%," + to_color + " " + ratio +
    //     "%," + from_color + " " + ratio + "%," + from_color + " 100%)");

          element.css("background",
        "linear-gradient(180deg,  " + "#A6CE38"+ "  0%," + "#38B449" + " " +ratio +
        "%, " + from_color + " " + ratio + "%," + from_color + " 100%)");  

    if (element.is("i")) {
        element.css("-webkit-background-clip", "text");
        element.css(" -webkit-text-fill-color", "transparent");
    }
}

function setUpColorChangeTimeline($window, SCREEN_RATIO, css_class, from_color, to_color) {
    $window.on("scroll", function () {
        var $window_scroll_top = $window.scrollTop();
        var $window_height = $window.height();
        var $document_height = $(document).height();

        css_class.each(function (index) {
            var timeline = $(css_class[index])
            var timeline_top = timeline.offset().top;
            if ($window_scroll_top + $window_height === $document_height) {
                changeColor(timeline, 100, from_color, to_color);
            } else {
                var change_point = $window_scroll_top + $window_height * SCREEN_RATIO;

                var ratio = Math.round(((change_point - timeline_top) / timeline.height() *
                    100) * 100) / 100;
                changeColor(timeline, ratio, from_color, to_color);
            }
        });
    })
}