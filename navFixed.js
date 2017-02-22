$.fn.navFixed = function () {
    var $_this = $(this),
        $_this_prev_marginBottom = parseInt($_this.prev().css("margin-bottom"), 10),
        $_this_next_marginTop = parseInt($_this.next().css("margin-top"), 10),
        _topPosition = $(document).scrollTop(),
        _navPosition = $_this.prev().outerHeight(true);

    var _if = function () {
        if (_topPosition >= _navPosition) {
            $_this.next().css("margin-top", $_this_prev_marginBottom + $_this.outerHeight() + $_this_next_marginTop + "px");
            $_this.css({
                "position": "fixed",
                "top": 0
            });
        } else {
            $_this.removeAttr("style");
            $_this.next().removeAttr("style");
        }
    };

    _if();

    $(document).scroll(function () {
        _topPosition = $(document).scrollTop();
        _if();
    });

    $(window).resize(function () {
        _navPosition = $_this.prev().outerHeight(true);
        _if();
    });
};