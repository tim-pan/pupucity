
//參考資源:https://www.itread01.com/content/1544986983.html
/*這概念
copy{
    show_框框
    tool1_start物件
    tool2
    .
    .
    .
}
*/
$(function(){
    function get_position(e1,e2){
            var le=document.getElementById("back_for_drag").scrollLeft;
            var rect1 = document.getElementById(e1).getBoundingClientRect();//此函數的right比較詭異請自己查看看
            var y = rect1.top; //取得區塊最上面的邊的座標. (1)
            var x = rect1.right; //取得區塊最左面的邊的座標 (2)
            var rect2=document.getElementById("line_top").getBoundingClientRect();
            var h=rect2.top;//(4)
            /*示意圖
            ===========.    ＾  ^
            | 普普4按鈕 |.   ｜  (4)
            ===========     |   ˇ
            ================|====================line_top
                            |
                            |
                          （1）
                            |
                            |
            <-------(2)------------->
                             =======
                             | obj |
                             =======


            */

            document.getElementById(e2).style.top=y+(-1*h)-20+"px";//this is top that you know
            document.getElementById(e2).style.left=x+le+"px";//this is left you know
        }
        
    var k2=0;
    //跟設備的函數一樣，不想打註解了QQQQQQQ
    var id_num_car=0;
    for(var i=1; i<21; i++) {
        window['dict_xoffset_car'+i] = new Array();//通過申明一個Array來做一個字典
        window['dict_yoffset_car'+i] = new Array();
    }
    //這函數就是拿來點擊然後生成一個物件，酷吧
    function copy_car(pic_src,id,www,hhh){
        /*

        |------------------   ------------|
        |                 |   |           |   整個div id是div_h+id_num_car比如說"div_c8"
        |      div1       |.  |      div2 |
        |                 |   |           |     生成的物件的id是 h+id_num_car，比如說"c8"
        |     生成的物件    |   |     工具   |
        |    內裝div3     |   |           |       
        |                 |   |           |
        |                 |   |           |
        |                 |   |           |
        |                 |   |           |
        |                 |   |           |
        |                 |   |           |
        |_________________|.  |___________|
<div 1>
      <div3 背景圖片>
</div1>
<div2>
      <div class="tool" type='image' src='種子社群街區/車輛切片/放大縮小(58X58px).png' style='略'><br>
      <div class="tool" type='image' src='種子社群街區/車輛切片/旋轉(58X58px).png' style='略'><br>
      <div class="tool" type='image' src='種子社群街區/車輛切片/置前(58X58px).png' style='略'><br>
      <div class="tool" type='image' src='種子社群街區/車輛切片/置後(58X58px).png' style='略'><br>
      <div class="tool" type='image' src='種子社群街區/車輛切片/左右鏡射(58X58px).png' style='略'><br>
      <div class="tool" type='image' src='種子社群街區/車輛切片/上下鏡射(58X58px).png' style='略'><br>
</div2>
        */

        var dragback=document.getElementById("back_for_drag");
        dragback.style.overflow= "hidden";

        id_num_car+=1;

        var div1=document.createElement("div");
        div1.id="div_c"+id_num_car;

        obj_zind["div_c"+id_num_car]=String(zin);
/*
        var content1="<div class='ui-resizable-handle ui-resizable-se ' style='position:absolute;width:10px;height:10px;right:-5px;bottom:-5px;background-color:#00DDDD;border:0px;z-index:99999></div>"+
                    "<div class='ui-resizable-handle ui-resizable-sw ' style='position:absolute;width:10px;height:10px;left:-5px;bottom:-5px;background-color:#00DDDD;border:0px;z-index:99999></div>"+
                    "<div class='ui-resizable-handle ui-resizable-ne ' style='position:absolute;width:10px;height:10pxright:-5px;top:-5px;background-color:#00DDDD;border:0px ;z-index:99999'></div>"+       
                    "<div class='ui-resizable-handle ui-resizable-nw ' style='position:absolute;width:10px;height:10px;left:-5px;top:-5px;background-color:#00DDDD;border:0px;z-index:99999'></div>"
                    
 */                   
        var div2=document.createElement("div");
        
        div2.id="tool_bar_car"+id_num_car;
        var zin=6+id_num_car;
        div1.style.zIndex=zin;

        div2.style.zIndex=zin;
        div2.style.top="5px";
        obj_zind[div1.id]=zin;//把生成之物件的zindex裝起來,裝div1即可反正div2 zindex和div1一樣

        var content="<input class='tool' type='image' src='種子社群街區/車輛切片/放大縮小(58X58px).png' style='width:40px;height:40px;border-top:0px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/旋轉(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/置前(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/置後(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/左右鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/上下鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/上下鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"


               
         $(div2).append(content);//div2塞入那堆input，不用JS寫的原因只是因為要打很多wwww
        div2.style.position="absolute";
        var div3=document.createElement("div");
        div3.type="image";
        div3.style.backgroundImage="url('"+pic_src+"')";//put url ,default is empty
        
       
        div3.id="e"+id_num_car;
        div3.style.height="100%";
        div3.style.width="100%";
        div3.style.display="block";
        div3.style.backgroundRepeat="no-repeat";
        div3.style.backgroundPosition="0 0";
        div3.style.backgroundSize="100% 100%";
        
        div1.appendChild(div3);

        div1.style.position="absolute";
        var wh = $("#back_for_drag").scrollLeft()+document.body.clientWidth/2;
       
        div1.style.left=wh+"px";
        div1.style.height=hhh+"px";
        div1.style.width=www+"px";
        div1.style.padding="0.5em";
        div1.style.textAlign="center";
        div1.style.margin="0px";
        
        var dragback=document.getElementById("back_for_drag");
        dragback.appendChild(div1);
        dragback.appendChild(div2);
        
        var k=div1.offsetWidth;
        
        div2.style.position="absolute";
        div2.style.top="100px";
        
        div2.style.left=wh+"px";
         //這邊有一點tricky
         /*
         把所有class 叫tool的物件取出，他是一個陣列
         然後利用迴圈更改class名
         並將id取名(沒辦法在html改)
         以防下一次選取到一樣的*/
         
        function set_tool_id(){
            var x = document.getElementsByClassName("tool");
            var k=1;
            while(x.length > 0) {
                x[0].id = "c"+id_num_car+"tool"+k;
                x[0].className = "to_changed";  
                k+=1;
            } 
        }//set_tool_id end
        set_tool_id();
        
    function show_border_car(id){
            //藍色邊框
        document.getElementById(id).style.boxShadow="0 0 0 3px #00DDDD";
        document.getElementById(id).style.borderRadius="2px";
        document.getElementById(id).style.padding="12.5px";
        div1.style.display="";
        div2.style.display="";

    }
   
    function tool1_start(e1,e2){//工具列第一個按鈕的縮放功能
        
        show_border_car(e1);
        $("#"+e2).css("display","none");
        var w = $(window).width();
        w=w*0.8;
        var h = $(window).height();
        h=h*0.7;
        $("#"+e1).resizable({
                handles:"all",
                disabled: false, 
                minWidth:50,
                minHeight:50 ,
                maxWidth:w,
                maxHeight:h,
                start:function(event,ui){
                    $(div2).css("display","none");
                    //縮放的還原牽扯到div1和div2，因為還原按下去，只有div1位置還原會很詭異
                    obj_id.push([div1.id,div2.id,div3.id]);
                    obj_act.push({"top":ui.position.top,"left":ui.position.left,
                                  "width":ui.size.width,"height":ui.size.height});//陣列裝字典
                },
                stop:function(){
                        show_border_car(e1);
                        get_position(e1,e2);
                        }
                });//讓物件「產生」縮放功能
        alert("把游標移到邊框按住開始縮放，點擊空白處停止縮放呦");
    }//tool1_start end

    var flag2_array=[90,180,270,0];
    ind=0;
    
    function tool2(e1){
        var obj = document.getElementById(e1);
        
        var w = $("#"+e1).width();
        var h = $("#"+e1).height();
        var di=Math.abs(h-w);

        //旋轉物件分2（物件長度和寬度大於等於或小於）*4（按一次旋轉90度，四次會回到原點）=8情況討論
        /*
        主要是因為物件旋轉預設是根據中心點做旋轉
        所以只要一轉
        你的物件就會跑掉（我們希望讓他切齊工具列）
        所以要再把他移回來
        */
        if (ind===0 && h>=w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            //obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            //obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
        }else if(ind===1 && h>=w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) ";
        }else if(ind===2 && h>=w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg)  translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
        }else if(ind===3 && h>=w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg)";
        }else if (ind===0 && h<w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";"rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
        }else if(ind===1 && h<w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) ";
        }else if(ind===2 && h<w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
        }else if(ind===3 && h<w){
            obj.style.transform="rotate("+flag2_array[ind]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[ind]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[ind]+"deg)";
        }
        
        get_position(div1.id,div2.id);
        ind+=1;
        ind=ind%4;
        show_border_car(div1.id);
        obj_id.push([div1.id,div2.id,div3.id]);//把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"rot":1,"ind":ind});//rot:1表示你讓他轉了 ind表示轉的情況
    }//tool2 end
    
    function tool3(e1,e2){
        var ar=Object.values(obj_zind);
        document.getElementById(e1).style.zIndex=Math.max.apply(null,ar)+1;
        document.getElementById(e2).style.zIndex=Math.max.apply(null,ar)+1;
        obj_zind[e1]+=1;

        obj_id.push([div1.id,div2.id,div3.id]);//把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"zid":1});//zid:1表示讓他上升一格
     
    }//tool3 end
    function tool4(e1,e2){
        var ar=Object.values(obj_zind);
        document.getElementById(e1).style.zIndex=Math.min.apply(null,ar)-1;
        document.getElementById(e2).style.zIndex=Math.min.apply(null,ar)-1;
        obj_zind[e1]-=1;

        obj_id.push([div1.id,div2.id,div3.id]);//把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"zid":-1})// zid:-1表示讓他下降一格
    }//tool4 end
    
    
    flag5=-1;
    function tool5(e1,e2){
        if (ind===0||ind===2){
            document.getElementById(e2).style.transform="scaleX("+flag5+")";
            document.getElementById(e2).style.MozTransform="scaleX("+flag5+")";
            document.getElementById(e2).style.OTransform="scaleX("+flag5+")";
            document.getElementById(e2).style.WebkitTransform="scaleX("+flag5+")";
            
        }else if(ind===1||ind===3){
            document.getElementById(e2).style.transform="scaleY("+flag5+")";
            document.getElementById(e2).style.MozTransform="scaleY("+flag5+")";
            document.getElementById(e2).style.OTransform="scaleY("+flag5+")";
            document.getElementById(e2).style.WebkitTransform="scaleY("+flag5+")";
        }
        show_border_car(e1);
        flag5*=-1;
    }//tool5 end
    flag6=-1;
    function tool6(e1,e2){
       if (ind===1||ind===3){
            document.getElementById(e2).style.transform="scaleX("+flag6+")";
            document.getElementById(e2).style.MozTransform="scaleX("+flag6+")";
            document.getElementById(e2).style.OTransform="scaleX("+flag6+")";
            document.getElementById(e2).style.WebkitTransform="scaleX("+flag6+")";
            
        }else if(ind===0||ind===2){
            document.getElementById(e2).style.transform="scaleY("+flag6+")";
            document.getElementById(e2).style.MozTransform="scaleY("+flag6+")";
            document.getElementById(e2).style.OTransform="scaleY("+flag6+")";
            document.getElementById(e2).style.WebkitTransform="scaleY("+flag6+")";
        }
        show_border_car(e1);
        flag6*=-1;
        obj_id.push([div1.id,div2.id,div3.id]);// 把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"scaY":1,"flag6":flag6});// scaY:1表示你讓他翻了 flag6就是翻的情況
    }//tool6 end

     
    
    function tool7(e1,e2){//delete
        var obj7 = document.getElementById(e1);
　　     obj7.remove();
        var obj8=document.getElementById(e2);
        obj8.remove();
    }
    
    show_border_car(div1.id);
    get_position(div1.id,div2.id);//更改div2 position

    var getAll = function(t) {//overstack 大神
        return $('.group' + t.helper.attr('class').match(/group([0-9]+)/)[1]).not(t);
    };
    div1.addEventListener('mousedown', function(){//讓物件可以滑來滑去
            $(div1).draggable({//本來移動的時候會亂跳，overstack的大神萬歲
                //https://stackoverflow.com/questions/3523747/webkit-and-jquery-draggable-jumping
            start:function (event, ui) {
                    var left = parseInt($(this).css('left'),10);
                    left = isNaN(left) ? 0 : left;
                    var top = parseInt($(this).css('top'),10);
                    top = isNaN(top) ? 0 : top;
                    recoupLeft = left - ui.position.left;
                    recoupTop = top - ui.position.top;

                    //把動作記錄到字典中，隨時準備復原
                    obj_id.push([div1.id,div2.id,div3.id]);
                    obj_act.push({"top":ui.position.top,"left":ui.position.left,
                                    });//陣列裝字典

                },
            drag: function(event,ui){ 
                    get_position(div1.id,div2.id);
                    ui.position.left += recoupLeft;
                    ui.position.top += recoupTop;//已放棄理解zzz
                    }           
            });
                                                
    });
    div1.addEventListener('dblclick',function(){show_border_car(div1.id)});
    
    var obj1=document.getElementById( "c"+id_num_car+"tool1")//縮放
    obj1.addEventListener("click",function(){tool1_start(div1.id,div2.id)});

    var obj2=document.getElementById( "c"+id_num_car+"tool2")//旋轉
    obj2.addEventListener("click",function(){tool2(div1.id)});

    var obj3=document.getElementById( "c"+id_num_car+"tool3")//物件往前
    obj3.addEventListener("click",function(){tool3(div1.id,div2.id)});

    var obj4=document.getElementById( "c"+id_num_car+"tool4")//物件往前
    obj4.addEventListener("click",function(){tool4(div1.id,div2.id)});

    var obj5=document.getElementById( "c"+id_num_car+"tool5")//橫的鏡射
    obj5.addEventListener("click",function(){tool5(div1.id,div3.id)});

    var obj6=document.getElementById( "c"+id_num_car+"tool6")//直的鏡射
    obj6.addEventListener("click",function(){tool6(div1.id,div3.id)});

    var obj7=document.getElementById( "c"+id_num_car+"tool7")//刪除
    obj7.addEventListener("click",function(){tool7(div1.id,div2.id)});

    $(document).mouseup(function(e) //點擊空白處框框消失加工具結束
    {
        var container = $(div1);
        var tool1=$("c"+id_num_car+"tool1");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && !tool1.is(e.target) && container.has(e.target).length === 0) {
            container.css('borderStyle','none');   // 點擊空白處會發生甚麼4
            container.css('boxShadow','0 0 0 0px');
            $(div2).css('display','none');
            //點擊空白處要讓所有功能消失的啦
            $(div1).resizable({ disabled: true });//禁用tool1的縮放功能(不是移除喔！)
        }
    });
    }//copy end
    document.getElementById("car1").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛1(74.46X134.53px).png","car1",74.46,134.53)});
    document.getElementById("car2").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛2(162.25X124.14px).png","car2",162.25,124.14)});
    document.getElementById("car3").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛3(172.72X105.04px).png","car3",172.72,105.04)});
    document.getElementById("car4").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛4(166.86X139.62px).png","car4",166.86,139.62)});
    document.getElementById("car5").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛5(417.43X142.97px).png","car5",417.43,142.97)});
    document.getElementById("car6").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛6(406.69X231.5px).png","car6",406.69,231.5)});
    document.getElementById("car7").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛7(385.32X238.87px).png","car7",385.43,238.87)});
    document.getElementById("car8").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛8(737.58X234.65px).png","car8",737.58,234.65)});
    document.getElementById("car9").addEventListener('click',function(){
    copy_car("種子社群街區/車輛切片/實際大小/車輛9(761.05X245.35px).png","car9",761.05,245.35)});

});