var Aut_oLi = document.getElementsByClassName("Aut_pics")
var len = Aut_oLi.length
var middle = (len-1)/2
var offset = 0

// Aut_oLi[0].onclick = function(){// 2 3 4 0 1
//     var offset = Math.abs(middle - 0)
//     for(var i=0;i<len;i++){
//         var distance = ( i + offset ) % 5
//         var temp = "Aut_0" + distance
//         Aut_oLi[i].id = temp;
//     }
// }

// Aut_oLi[1].onclick = function(){// 1 2 3 4 0
//     var offset = Math.abs(middle - 1)
//     for(var i=0;i<len;i++){
//         var distance = ( i + offset ) % 5
//         var temp = "Aut_0" + distance
//         Aut_oLi[i].id = temp;
//     }
// }

// Aut_oLi[2].onclick = function(){// 0 1 2 3 4
//     var offset = Math.abs(middle - 2)
//     for(var i=0;i<len;i++){
//         var distance = ( i + offset ) % 5
//         var temp = "Aut_0" + distance
//         Aut_oLi[i].id = temp;
//     }
// }

// Aut_oLi[3].onclick = function(){// 4 0 1 2 3
//     var offset = Math.abs(middle - 3)
//     for(var i=0;i<len;i++){
//         var distance = ( i + offset ) % 5
//         var temp = "Aut_0" + distance
//         Aut_oLi[i].id = temp;
//     }
// }


for(var j=0;j<len;j++){
    (function(j){
        Aut_oLi[j].onclick = function(){
            if(j <= middle){
                offset = Math.abs(middle - j)
            }else{
                offset = len - Math.abs(middle - j)
            }
            for(var i=0;i<len;i++){
                var distance = ( i + offset ) % 5
                var temp = "Aut_0" + distance
                Aut_oLi[i].id = temp;
            }
        }
    })(j)
}
    



