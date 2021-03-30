//内容渐显
function Spring_show(id,speed,Target){
    var oDiv=document.getElementById(id);
    var alpha=30;
    var timer_Spring=null;
    clearInterval(timer_Spring);	//清除其他计时器
    timer_Spring=setInterval(function(){
        if(alpha>=Target)
            clearInterval(timer_Spring);
        else
        {
            alpha+=speed;
            oDiv.style.opacity=alpha/100;
        }
},30);
}

//内容渐隐
function Spring_hide(id,speed,Target){
    var oDiv=document.getElementById(id);
    var timer_Spring=null;
    var alpha = 100;
    clearInterval(timer_Spring);	//清除其他计时器
    timer_Spring=setInterval(function(){
        if(alpha<=Target)
            clearInterval(timer_Spring);
        else
        {
            alpha += speed;
            oDiv.style.opacity=alpha/100;
        }
},30);
}


var oDiv1=document.getElementById('img1');
var oDiv2=document.getElementById('img2');
var oDiv3=document.getElementById('img3');
var oBack=document.getElementById('Spring');
oDiv1.onmouseover=function(){
    Spring_show('YuJinXiang',10,100);
    oBack.style.background='url("images/Spring/YuJinXiang2.jpg") no-repeat';
    oBack.style.backgroundSize='cover';
    Spring_hide('img2',-10,0);
    Spring_hide('img3',-10,0);
};
oDiv1.onmouseout=function(){
    Spring_hide('YuJinXiang',-10,0);
    oBack.style.background='';
    Spring_show('img2',10,100);
    Spring_show('img3',10,100);
};
oDiv2.onmouseover=function(){
    Spring_show('MuDan',10,100);
    oBack.style.background='url("images/Spring/MuDan2.jpg") no-repeat';
    oBack.style.backgroundSize='cover';
    Spring_hide('img1',-10,0);
    Spring_hide('img3',-10,0);
};
oDiv2.onmouseout=function(){
    Spring_hide('MuDan',-10,0);
    oBack.style.background='';
    Spring_show('img1',10,100);
    Spring_show('img3',10,100);
};
oDiv3.onmouseover=function(){
    Spring_show('LingLan',10,100);
    oBack.style.background='url("images/Spring/LingLan2.jpg") no-repeat';
    oBack.style.backgroundSize='cover';
    Spring_hide('img2',-10,0);
    Spring_hide('img1',-10,0);
};
oDiv3.onmouseout=function(){
    Spring_hide('LingLan',-10,0);
    oBack.style.background='';
    Spring_show('img2',10,100);
    Spring_show('img1',10,100);
};