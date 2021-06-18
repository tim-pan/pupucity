$ (function(){
    var flag1=0;//協助條件判斷的東東
    var flag2=0;
    var para1=30;//一次動多少
    var para2=0.00001;//速度
    var h = document.body.scrollTop;
    var w = document.getElementById("nullback").clientWidth-document.body.clientWidth;
    //簡單來說，nullback可以滾動到最右邊的大小就是網格大小扣掉可視頁面大小
    //為何扣掉可視頁面大小？因為一開始出現的視窗就是scrollleft等於0
    //也就是說，對於scrollleft來說，一開始是從0開始而不是從可4大小的視窗的大小開始

    i=0;//捲軸可滾動長度
async function scr_right(){//長按專用
    document.getElementById("imageField15").style.visibility="";
    if (flag1===0){
        $("#pcolor").scrollLeft(i);
        $("#pcolor2").scrollLeft(i);
        $("#pcolor3").scrollLeft(i);
        $("#back_for_drag").scrollLeft(i);

         i+=para1;
         if (i>w){
            //已經滾到最右邊的情況
            //因為一直家400所以i會到很大很大
            //所以當超過最大可以滾動的大小，就設成最大長度扣401
            //弄成最大長度也沒差啦，使用者就多按一下才能動而已
            //不弄這個判斷也沒差啦，使用者要按左移很久i才會慢慢扣回來開始動就是了
            
            i=i-para1-1;
            document.getElementById("imageField16").style.visibility="hidden";
            flag1=1;
        }    
         sleep(para2).then(() => {scr_right();});
    }else{
        return false;
    }
}//scr end

async function scr_left(){//長按專用，邏輯同上
    document.getElementById("imageField16").style.visibility="";
    if (flag2===0){
        $("#pcolor").scrollLeft(i);
        $("#pcolor2").scrollLeft(i);
        $("#pcolor3").scrollLeft(i);
        $("#back_for_drag").scrollLeft(i);

         i-=para1;
         if (i<0){
            i=i-para1-1;
            document.getElementById("imageField15").style.visibility="hidden";
            flag2=1;
        }
         sleep(para2).then(() => {scr_left();});
    }else{
        return false;
    }
}//scr end
function sleep(ms) {//類似python的time.sleep()
  return new Promise(resolve => setTimeout(resolve, ms));
}

//真正長按後應該執行的內容 
function longPress_right(){ 
    timeOutEvent = 0; 
    //執行長按要執行的內容,如彈出選單 
    scr_right();

} 
function longPress_left(){ 
    timeOutEvent = 0; 
    //執行長按要執行的內容,如彈出選單 
    scr_left();
}
var timeOutEvent=0;//定時器 
function gtouchstart_right(){ 
    flag1=0;
    timeOutEvent = setTimeout(longPress_right(),300);//這裡設定定時器,定義長按500毫秒觸發長按事件,時間可以自己改,本肥宅感覺500毫秒非常合適
    document.getElementById("imageField15").style.visibility="";
 
    $("#pcolor").scrollLeft(i);
    $("#pcolor2").scrollLeft(i);
    $("#pcolor3").scrollLeft(i);
    $("#back_for_drag").scrollLeft(i);


    i+=para1;
    if (i>w){//已經滾到最右邊
    //因為一直家400所以i會到很大很大
    //所以當超過最大可以滾動的大小，就設成最大長度扣401
    //弄成最大長度也沒差啦，使用者就多按一下才能動而已
        i=w-para1-1;
        document.getElementById("imageField16").style.visibility="hidden";
    }

    return false; 
}; 
function gtouchstart_left(){ 
    flag2=0;
    timeOutEvent = setTimeout(longPress_left(),250);//這裡設定定時器,定義長按500毫秒觸發長按事件,時間可以自己改,本肥宅感覺500毫秒非常合適 
    document.getElementById("imageField16").style.visibility="";

    $("#pcolor").scrollLeft(i);
    $("#pcolor2").scrollLeft(i);
    $("#pcolor3").scrollLeft(i);
    $("#back_for_drag").scrollLeft(i);


    i-=para1;
    if (i<=0){
        i=0;
        document.getElementById("imageField15").style.visibility="hidden";

    }
    return false; 
}; 



//手釋放,如果在500毫秒內就釋放,則取消長按事件,此時可以執行onclick應該執行的事件 
function gtouchend_right(){ 
    flag1=1;
    clearTimeout(timeOutEvent);//清除定時器 
    if(timeOutEvent!=0){ 
    //這裡寫要執行的內容(尤如onclick事件) 
    scr_right();
    } 

    return false; 
}; 
    //如果手指有移動,則取消所有事件,此時說明使用者只是要移動而不是長按 
function gtouchend_left(){ 
    flag2=1;
    clearTimeout(timeOutEvent);//清除定時器 
    if(timeOutEvent!=0){ 
    //這裡寫要執行的內容(尤如onclick事件) 
    scr_left();
    } 

    return false; 
}; 
function gtouchmove_right(){ 
    clearTimeout(timeOutEvent);//清除定時器 
    timeOutEvent = 0; 
};
function gtouchmove_left(){ 
    clearTimeout(timeOutEvent);//清除定時器 
    timeOutEvent = 0; 
}

document.getElementById("imageField16").addEventListener('mousedown',function(){gtouchstart_right()});
document.getElementById("imageField16").addEventListener('onclick',function(){gtouchmove_right()});
document.getElementById("imageField16").addEventListener('mouseup',function(){gtouchend_right()})
document.getElementById("imageField15").addEventListener('mousedown',function(){gtouchstart_left()});
document.getElementById("imageField15").addEventListener('onclick',function(){gtouchmove_left()});
document.getElementById("imageField15").addEventListener('mouseup',function(){gtouchend_left()})

});
