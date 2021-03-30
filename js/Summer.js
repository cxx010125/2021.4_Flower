/* ↓ 四、 -----------Summer 横板滚动------------*/
var oDiv = document.getElementById("Sum_main");
var oUl = document.getElementById("Sum_main_ul");
var oLi = document.getElementsByClassName("Sum_main_li");
var oBtnL = document.getElementById("Sum_btn_left");
var oBtnR = document.getElementById("Sum_btn_right");
var oLi_word = document.getElementById("Sum_words_content");
var oLi_title = document.getElementById("Sum_words_title");
var speed=1;
oUl.innerHTML+=oUl.innerHTML;
oUl.style.width=(oLi[0].offsetWidth+30)*oLi.length+'px';

var timer_Sum = setInterval(Sum_main_move,10);
oDiv.onmouseover=function(){
    clearInterval(timer_Sum);
}
oDiv.onmouseout=function(){
    timer_Sum = setInterval(Sum_main_move,10);
}
oBtnL.onclick=function(){
    speed=-1;
}
oBtnR.onclick=function(){
    speed=1;
}

arr_word=["原产地中海沿岸。中国南部地区广泛栽培，欧洲名花之一。 紫罗兰的花语神秘而优雅，特别是当它开花后，看起来非常漂亮. 通常来说紫罗兰花语是永恒的美与爱，而且代表着我很喜欢你的含义。",
        "①表示忠贞、贞洁。茉莉花在爱情上代表纯洁真挚的爱，没有假的成分，表达坚贞爱情。②表示尊敬、尊重。当有贵宾来访，表示尊重与友好，是一种热情好客的礼节。",
        "被评为中国十大名花之一。荷花是印度和越南的国花。①白荷花代表怀念、恋情喜悦。 ②黄荷花代表失去希望、淡薄的爱。 ③红荷花代表坚毅、勇敢。 ④深蓝荷花代表永恒、理智、平静。 ⑤暗紫荷花代表偷偷地爱慕。",
        "可用于麻醉，也可用于治疗疾病。①红色曼陀罗又名彼岸花。代表流血、血腥的爱。 ②蓝色曼陀罗代表诈情。 ③金色曼陀罗代表敬爱，有着不止息的幸福。 ④紫色曼陀罗代表恐怖、惊恐。"
    ];
arr_title=["紫罗兰","茉莉花","荷花","曼陀罗"];
oLi[0].onclick= function(){
    oLi_word.innerHTML=arr_word[0];
    oLi_title.innerHTML=arr_title[0];
}
oLi[4].onclick = function(){
    oLi_word.innerHTML=arr_word[0];
    oLi_title.innerHTML=arr_title[0];
}
oLi[1].onclick = function(){
    oLi_word.innerHTML=arr_word[1];
    oLi_title.innerHTML=arr_title[1];
}
oLi[5].onclick = function(){
    oLi_word.innerHTML=arr_word[1];
    oLi_title.innerHTML=arr_title[1];
}
oLi[2].onclick = function(){
    oLi_word.innerHTML=arr_word[2];
    oLi_title.innerHTML=arr_title[2];
}
oLi[6].onclick = function(){
    oLi_word.innerHTML=arr_word[2];
    oLi_title.innerHTML=arr_title[2];
}
oLi[3].onclick = function(){
    oLi_word.innerHTML=arr_word[3];
    oLi_title.innerHTML=arr_title[3];
}
oLi[7].onclick = function(){
    oLi_word.innerHTML=arr_word[3];
    oLi_title.innerHTML=arr_title[3];
}
    
function Sum_main_move(){	//Sum_横板移动
    if(oUl.offsetLeft<-oUl.offsetWidth/2){
        oUl.style.left='0';
    }
    if(oUl.offsetLeft>0){
        oUl.style.left=-oUl.offsetWidth/2+"px";
    }
    oUl.style.left=oUl.offsetLeft+speed+"px";
}