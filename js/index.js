var Onav_title_home = document.getElementById("nav_title_home");
var Onav_title_flower = document.getElementById("nav_title_flower");
var Onav_title_about = document.getElementById("nav_title_about");
var Ohome = document.getElementById("home");
var Oflower = document.getElementById("flower");
var Oabout = document.getElementById("about");

//home界面的四张图片切换到flower界面相应板块
var Ohome_ul_li = document.getElementsByClassName("home_ul_li");
Ohome_ul_li[0].onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title_choose";
    Onav_title_about.className = "nav_title";
    Ohome.className = "hide";
    Oflower.className = "show";
    Oabout.className = "hide";
    clearInterval(timer);
    flower_spring_show();
}
Ohome_ul_li[1].onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title_choose";
    Onav_title_about.className = "nav_title";
    Ohome.className = "hide";
    Oflower.className = "show";
    Oabout.className = "hide";
    clearInterval(timer);
    flower_summer_show();
}
Ohome_ul_li[2].onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title_choose";
    Onav_title_about.className = "nav_title";
    Ohome.className = "hide";
    Oflower.className = "show";
    Oabout.className = "hide";
    clearInterval(timer);
    flower_autumn_show();
}
Ohome_ul_li[3].onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title_choose";
    Onav_title_about.className = "nav_title";
    Ohome.className = "hide";
    Oflower.className = "show";
    Oabout.className = "hide";
    clearInterval(timer);
    flower_winter_show();
}

//第一次跳转页面时判断当前的nav
function nav_jud() {
    if (Ohome.className == "show") {
        Onav_title_home.className = "nav_title_choose";
        Onav_title_flower.className = "nav_title";
        Onav_title_about.className = "nav_title";
    } else if (Oflower.className == "show") {
        Onav_title_home.className = "nav_title";
        Onav_title_flower.className = "nav_title_choose";
        Onav_title_about.className = "nav_title";
    } else if (Oabout.className == "show") {
        Onav_title_home.className = "nav_title";
        Onav_title_flower.className = "nav_title";
        Onav_title_about.className = "nav_title_choose";
    }
}


/* home板块的底部点滚动 */
function home_ul_point_li() {
    var Ohome_ul_point_li = document.getElementsByClassName("home_ul_point_li");
    Ohome_ul_point_li[0].style.color = "white";
    Ohome_ul_point_li[0].style.marginBottom = "3px";
    Ohome_ul_point_li[1].style.color = "rgb(81, 230, 222)";
    Ohome_ul_point_li[2].style.color = "rgb(81, 230, 222)";
    Ohome_ul_point_li[3].style.color = "rgb(81, 230, 222)";
    var i = 1;
    timer = setInterval(function() {
        if (i > 3) {
            i = i % 4;
        }
        if (i == 0) {
            Ohome_ul_point_li[0].style.color = "white";
            Ohome_ul_point_li[0].style.marginBottom = "3px";
            Ohome_ul_point_li[0].style.transitionDuration = "0.3s";
            Ohome_ul_point_li[1].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[2].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[3].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[1].style.marginBottom = "0px";
            Ohome_ul_point_li[2].style.marginBottom = "0px";
            Ohome_ul_point_li[3].style.marginBottom = "0px";
        }
        if (i == 1) {
            Ohome_ul_point_li[0].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[1].style.color = "white";
            Ohome_ul_point_li[1].style.marginBottom = "3px";
            Ohome_ul_point_li[1].style.transitionDuration = "0.3s";
            Ohome_ul_point_li[2].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[3].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[0].style.marginBottom = "0px";
            Ohome_ul_point_li[2].style.marginBottom = "0px";
            Ohome_ul_point_li[3].style.marginBottom = "0px";
        }
        if (i == 2) {
            Ohome_ul_point_li[0].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[1].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[2].style.color = "white";
            Ohome_ul_point_li[2].style.marginBottom = "3px";
            Ohome_ul_point_li[2].style.transitionDuration = "0.3s";
            Ohome_ul_point_li[3].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[0].style.marginBottom = "0px";
            Ohome_ul_point_li[1].style.marginBottom = "0px";
            Ohome_ul_point_li[3].style.marginBottom = "0px";
        }
        if (i == 3) {
            Ohome_ul_point_li[0].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[1].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[2].style.color = "rgb(81, 230, 222)";
            Ohome_ul_point_li[3].style.color = "white";
            Ohome_ul_point_li[3].style.marginBottom = "3px";
            Ohome_ul_point_li[3].style.transitionDuration = "0.3s";
            Ohome_ul_point_li[0].style.marginBottom = "0px";
            Ohome_ul_point_li[1].style.marginBottom = "0px";
            Ohome_ul_point_li[2].style.marginBottom = "0px";
        }
        i++;
    }, 4000);
}

Onav_title_home.onclick = function() {
    Onav_title_home.className = "nav_title_choose";
    Onav_title_flower.className = "nav_title";
    Onav_title_about.className = "nav_title";
    Ohome.className = "show";
    Oflower.className = "hide";
    Oabout.className = "hide";
    clearInterval(timer);
    home_ul_point_li();
}

Onav_title_flower.onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title_choose";
    Onav_title_about.className = "nav_title";
    Ohome.className = "hide";
    Oflower.className = "show";
    Oabout.className = "hide";
    clearInterval(timer);
}

Onav_title_about.onclick = function() {
    Onav_title_home.className = "nav_title";
    Onav_title_flower.className = "nav_title";
    Onav_title_about.className = "nav_title_choose";
    Ohome.className = "hide";
    Oflower.className = "hide";
    Oabout.className = "show";
    clearInterval(timer);
}