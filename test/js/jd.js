window.onload = function(){
    var lbt = document.getElementById("lbt");
    //var imgArr = lbt.getElementsByTagName("img");
    var liArr = lbt.getElementsByTagName("li");
    lbt.style.width = (liArr[0].offsetWidth) * liArr.length + "px";

    var lbtdiv = document.getElementById("lbt-div");
    var boxdiv = document.getElementById("box");
    lbtdiv.style.left = (boxdiv.offsetWidth - lbtdiv.offsetWidth)/2 +"px";

    var lbt_index = 0;
    var lbtdiv_a = lbtdiv.getElementsByTagName("a");
    lbtdiv_a[lbt_index].style.backgroundColor = "#fa2c19";


    for(let i = 0, j = lbtdiv_a.length; i < j ;i++){
        lbtdiv_a[i].index = i;
        lbtdiv_a[i].onclick = function(){
            clearInterval(lbt.timer);
            lbt_index =  this.index;

            // move(lbt,"left",(liArr[0].offsetWidth) * lbtdiv_a.length,-(liArr[0].offsetWidth) * lbt_index,function(){
            //     setlbtdiv_a();
            // });
            //aotoChance();

            lbt.style.left = -(liArr[0].offsetWidth) * lbt_index + 'px';
            setlbtdiv_a();

        }
    }

    console.log(lbt.getElementsByTagName("li")[0].offsetWidth);

    aotoChance();

    function setlbtdiv_a(){
        if(lbt_index == liArr.length - 1){
            lbt_index = 0;
            lbt.style.left = -(liArr[0].offsetWidth) * lbt_index + 'px';
        }

        for(let i = 0, j = lbtdiv_a.length; i < j ;i++){
            lbtdiv_a[i].style.backgroundColor = "";
        }
        lbtdiv_a[lbt_index].style.backgroundColor = "#fa2c19";
    }

    
//自动切换函数
var timer;
    function aotoChance(){
        timer = setInterval(function(){
            lbt_index++;
            lbt_index %= liArr.length;
            // move(lbt,"left",70,-(liArr[0].offsetWidth) * lbt_index,function(){
            //     setlbtdiv_a();
            // });

            move(lbt,"left",50,-(liArr[0].offsetWidth) * lbt_index,function(){
                setlbtdiv_a();
            });
        },3000);
    }
}