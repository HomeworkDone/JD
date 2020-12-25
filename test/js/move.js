function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }
    else{
        //ie8
        return obj.currentStyle[name];
    }
}


//obj 执行对象
//speed 移动速度  匀速
//切换函数
function move (obj,attr,speed,target,callback){
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj,attr));
    if(current > target)
    {
        speed = -speed;
    }

    obj.timer = setInterval(function(){
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed;
        if (speed < 0 && newValue < target || speed > 0 && newValue > target )
        {
            newValue = target;
        }

        obj.style[attr] = newValue +"px";

        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30);
}


//测试函数，speed由快到慢
// function move2 (obj,attr,target,callback){
//     clearInterval(obj.timer);
//     var current = parseInt(getStyle(obj,attr));
//     var speed,fx = 1;

//     speed = (target - current)/3;

//     if (speed < 0){
//         fx = -fx;
//     }
//     // if(current > target)
//     // {
//     //     speed = -speed;
//     // }

//     obj.timer = setInterval(function(){
//         var oldValue = parseInt(getStyle(obj,attr));
//         speed = (target - oldValue)/10;

//         if (speed*fx - (target - current)/3*fx < 0){
//             speed = (target - current)/5;
//         }

//         var newValue = oldValue + speed;
//         if (speed < 0 && newValue < target || speed > 0 && newValue > target )
//         {
//             newValue = target;
//         }

//         obj.style[attr] = newValue +"px";

//         if(newValue == target){
//             clearInterval(obj.timer);
//             callback && callback();
//         }
//     },30);
// }


// function move3 (obj,attr,target,callback){
//     clearInterval(obj.timer);
//     var current = parseInt(getStyle(obj,attr));
//     var fx = 1;
//     if(current > target)
//     {
//         fx = -fx;
//     }

//     obj.timer = setInterval(function(){
//         var oldValue = parseInt(getStyle(obj,attr));
//         var newValue = oldValue + (target - oldValue)/5;
//         if (fx < 0 && newValue < target || fx > 0 && newValue > target )
//         {
//             newValue = target;
//         }

//         obj.style[attr] = newValue +"px";

//         if(newValue == target){
//             clearInterval(obj.timer);
//             callback && callback();
//         }
//     },30);
// }
