var Oflower_icon = document.getElementsByClassName("flower_icon");
var Otriangle_1 = document.getElementById("triangle_1");
var Otriangle_2 = document.getElementById("triangle_2");
var Otriangle_3 = document.getElementById("triangle_3");
var Otriangle_4 = document.getElementById("triangle_4");
var Oflower_content_spring = document.getElementById("flower_content_spring");
var Oflower_content_summer = document.getElementById("flower_content_summer");
var Oflower_content_autumn = document.getElementById("flower_content_autumn");
var Oflower_content_winter = document.getElementById("flower_content_winter");

//切换到spring板块
function flower_spring_show() {
    Otriangle_1.className = "triangle visible";
    Otriangle_2.className = "triangle invisible";
    Otriangle_3.className = "triangle invisible";
    Otriangle_4.className = "triangle invisible";
    Oflower_icon[0].src = "../四季名花/images/flower/Spring/spring_icon_on.png";
    Oflower_icon[1].src = "../四季名花/images/flower/Summer/summer_icon.png";
    Oflower_icon[2].src = "../四季名花/images/flower/Autumn/autumn_icon.png";
    Oflower_icon[3].src = "../四季名花/images/flower/Winter/winter_icon.png";
    Oflower_content_spring.className = "show";
    Oflower_content_summer.className = "hide";
    Oflower_content_autumn.className = "hide";
    Oflower_content_winter.className = "hide";
}
//切换到summer板块
function flower_summer_show() {
    Otriangle_1.className = "triangle invisible";
    Otriangle_2.className = "triangle visible";
    Otriangle_3.className = "triangle invisible";
    Otriangle_4.className = "triangle invisible";
    Oflower_icon[0].src = "../四季名花/images/flower/Spring/spring_icon.png";
    Oflower_icon[1].src = "../四季名花/images/flower/Summer/summer_icon_on.png";
    Oflower_icon[2].src = "../四季名花/images/flower/Autumn/autumn_icon.png";
    Oflower_icon[3].src = "../四季名花/images/flower/Winter/winter_icon.png";
    Oflower_content_spring.className = "hide";
    Oflower_content_summer.className = "show";
    Oflower_content_autumn.className = "hide";
    Oflower_content_winter.className = "hide";
}
//切换到autumn板块
function flower_autumn_show() {
    Otriangle_1.className = "triangle invisible";
    Otriangle_2.className = "triangle invisible";
    Otriangle_3.className = "triangle visible";
    Otriangle_4.className = "triangle invisible";
    Oflower_icon[0].src = "../四季名花/images/flower/Spring/spring_icon.png";
    Oflower_icon[1].src = "../四季名花/images/flower/Summer/summer_icon.png";
    Oflower_icon[2].src = "../四季名花/images/flower/Autumn/autumn_icon_on.png";
    Oflower_icon[3].src = "../四季名花/images/flower/Winter/winter_icon.png";
    Oflower_content_spring.className = "hide";
    Oflower_content_summer.className = "hide";
    Oflower_content_autumn.className = "show";
    Oflower_content_winter.className = "hide";
}
//切换到winter板块
function flower_winter_show() {
    Otriangle_1.className = "triangle invisible";
    Otriangle_2.className = "triangle invisible";
    Otriangle_3.className = "triangle invisible";
    Otriangle_4.className = "triangle visible";
    Oflower_icon[0].src = "../四季名花/images/flower/Spring/spring_icon.png";
    Oflower_icon[1].src = "../四季名花/images/flower/Summer/summer_icon.png";
    Oflower_icon[2].src = "../四季名花/images/flower/Autumn/autumn_icon.png";
    Oflower_icon[3].src = "../四季名花/images/flower/Winter/winter_icon_on.png";
    Oflower_content_spring.className = "hide";
    Oflower_content_summer.className = "hide";
    Oflower_content_autumn.className = "hide";
    Oflower_content_winter.className = "show";
}



Oflower_icon[0].onclick = function() {
    flower_spring_show();
}

Oflower_icon[1].onclick = function() {
    flower_summer_show();
}

Oflower_icon[2].onclick = function() {
    flower_autumn_show();
}

Oflower_icon[3].onclick = function() {
    flower_winter_show();
}