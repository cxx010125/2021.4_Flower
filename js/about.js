var new_scroll = 0;
var last_scroll;
var line_part = document.getElementsByClassName("about_bottom_line_part");
var view_height_1 = 0.35 * window.screen.height;
var view_height_2 = 0.8 * window.screen.height;
var view_height_3 = 1.25 * window.screen.height;

var view_height_4 = 0.25 * window.screen.height;
var view_height_5 = 0.7 * window.screen.height;
var view_height_6 = 1.15 * window.screen.height;

window.addEventListener('scroll', function(e) {
    last_scroll = window.scrollY;
    // console.log("newScroll:" + new_scroll);
    // console.log("lastScroll:" + last_scroll);
    // console.log("5:" + view_height_5);
    // 向下滚动[0~3]
    if (new_scroll < last_scroll && last_scroll > view_height_1) {
        for (var i = 0; i <= 3; i++) {
            line_part[i].style.opacity = "1";
            line_part[i].style.transform = "translateY(0px)";
        }
    }
    // 向下滚动[4~7]
    if (new_scroll < last_scroll && last_scroll > view_height_2) {
        for (var i = 4; i <= 7; i++) {
            line_part[i].style.opacity = "1";
            line_part[i].style.transform = "translateY(0px)";
        }
    }
    // 向下滚动[8~11]
    if (new_scroll < last_scroll && last_scroll > view_height_3) {
        for (var i = 8; i <= 11; i++) {
            line_part[i].style.opacity = "1";
            line_part[i].style.transform = "translateY(0px)";
        }
    }

    // 向上滚动
    if (new_scroll > last_scroll && last_scroll < view_height_6) {
        for (var i = 8; i <= 11; i++) {
            line_part[i].style.opacity = "0";
            line_part[i].style.transform = "translateY(100px)";
        }
    }
    if (new_scroll > last_scroll && last_scroll < view_height_5) {
        for (var i = 4; i <= 7; i++) {
            line_part[i].style.opacity = "0";
            line_part[i].style.transform = "translateY(100px)";
        }
    }
    if (new_scroll > last_scroll && last_scroll < view_height_4) {
        for (var i = 0; i <= 3; i++) {
            line_part[i].style.opacity = "0";
            line_part[i].style.transform = "translateY(100px)";
        }
    }


    new_scroll = last_scroll;
})