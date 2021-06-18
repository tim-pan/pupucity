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
    var id_num_tree=0;
    for(var i=1; i<21; i++) {
        window['dict_xoffset_tree'+i] = new Array();//通過申明一個Array來做一個字典
        window['dict_yoffset_tree'+i] = new Array();
    }
    //這函數就是拿來點擊然後生成一個物件，酷吧
    function copy_tree(pic_src,id,www,hhh){
        /*

        |------------------   ------------|
        |                 |   |           |   整個div id是div_t+id_num_tree比如說"div_t8"
        |      div1       |.  |      div2 |
        |                 |   |           |     生成的物件的id是 t+id_num_tree，比如說"t8"
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

        id_num_tree+=1;

        var div1=document.createElement("div");
        div1.id="div_t"+id_num_tree;

        obj_zind["div_t"+id_num_tree]=String(zin);
/*
        var content1="<div class='ui-resizable-handle ui-resizable-se ' style='position:absolute;width:10px;height:10px;right:-5px;bottom:-5px;background-color:#00DDDD;border:0px;z-index:99999></div>"+
                    "<div class='ui-resizable-handle ui-resizable-sw ' style='position:absolute;width:10px;height:10px;left:-5px;bottom:-5px;background-color:#00DDDD;border:0px;z-index:99999></div>"+
                    "<div class='ui-resizable-handle ui-resizable-ne ' style='position:absolute;width:10px;height:10pxright:-5px;top:-5px;background-color:#00DDDD;border:0px ;z-index:99999'></div>"+       
                    "<div class='ui-resizable-handle ui-resizable-nw ' style='position:absolute;width:10px;height:10px;left:-5px;top:-5px;background-color:#00DDDD;border:0px;z-index:99999'></div>"
                    
 */                   
        var div2=document.createElement("div");
        
        div2.id="tool_bar_tree"+id_num_tree;
        var zin=6+id_num_tree;
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
        
       
        div3.id="e"+id_num_tree;
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
                x[0].id = "t"+id_num_tree+"tool"+k;
                x[0].className = "to_changed";  
                k+=1;
            } 
        }//set_tool_id end
        set_tool_id();
    
    function show_border_tree(id){
            //藍色邊框
        document.getElementById(id).style.boxShadow="0 0 0 3px #00DDDD";
        document.getElementById(id).style.borderRadius="2px";
        document.getElementById(id).style.padding="12.5px";
        div1.style.display="";
        div2.style.display="";

    } 
    function tool1_start(e1,e2){//工具列第一個按鈕的縮放功能
        
        show_border_tree(e1);
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
                        show_border_tree(e1);
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
        show_border_tree(div1.id);
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
        if (ind===0 ||ind===2){
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
        show_border_tree(e1);
        flag5*=-1;
        obj_id.push([div1.id,div2.id,div3.id]);// 把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"scaX":1,"flag5":flag5});
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
        show_border_tree(e1);
        flag6*=-1;
        obj_id.push([div1.id,div2.id,div3.id]);// 把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"scaY":1,"flag6":flag6});// scaY:1表示你讓他翻了 flag6就是翻的情況
    }//tool6 end

     
    
    function tool7(e1,e2,e3){//delete
        //刪除前必須把需要的屬性都存下來
        obj_id.push([div1.id,div2.id,div3.id]);
        var obj7=document.getElementById(e1);
        hh=obj7.style.height;
        ww=obj7.style.width;
        var rect1 = document.getElementById(e1).getBoundingClientRect()
        y=rect1.top;
        x=rect1.left;
        zin=obj7.style.zIndex;
        var obj1=document.getElementById(e3);
        src=obj1.style.backgroundImage;
        obj_act.push({"del":1,"height":hh,"width":ww,"top":y,"left":x,"zin":zin,"scr":src
        });
　　     obj7.remove();
        var obj8=document.getElementById(e2);
        obj8.remove();
    }
    
    show_border_tree(div1.id);
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
    div1.addEventListener('dblclick',function(){show_border_tree(div1.id)});
    
    var obj1=document.getElementById( "t"+id_num_tree+"tool1")//縮放
    obj1.addEventListener("click",function(){tool1_start(div1.id,div2.id)});

    var obj2=document.getElementById( "t"+id_num_tree+"tool2")//旋轉
    obj2.addEventListener("click",function(){tool2(div1.id)});

    var obj3=document.getElementById( "t"+id_num_tree+"tool3")//物件往前
    obj3.addEventListener("click",function(){tool3(div1.id,div2.id)});

    var obj4=document.getElementById( "t"+id_num_tree+"tool4")//物件往前
    obj4.addEventListener("click",function(){tool4(div1.id,div2.id)});

    var obj5=document.getElementById( "t"+id_num_tree+"tool5")//橫的鏡射
    obj5.addEventListener("click",function(){tool5(div1.id,div3.id)});

    var obj6=document.getElementById( "t"+id_num_tree+"tool6")//直的鏡射
    obj6.addEventListener("click",function(){tool6(div1.id,div3.id)});

    var obj7=document.getElementById( "t"+id_num_tree+"tool7")//刪除
    obj7.addEventListener("click",function(){tool7(div1.id,div2.id,div3.id)});

    $(document).mouseup(function(e) //點擊空白處框框消失加工具結束
    {
        var container = $(div1);
        var tool1=$("t"+id_num_tree+"tool1");

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
    document.getElementById("tree1").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹1(179.7X72.3px).png","tree1",179.7,72.3)});
    document.getElementById("tree2").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹2(106.12X70.36px).png","tree2",106.12,70.36)});
    document.getElementById("tree3").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹3(125.26X46.79px).png","tree3",125.26,46.79)}); 
    document.getElementById("tree4").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹4(107.03X139.29px).png","tree4",107.03,139.29)});
    document.getElementById("tree5").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹5(107.02X135.13px).png","tree5",107.02,135.13)});
    document.getElementById("tree6").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹6(292.9X285.89px).png","tree6",292.9,285.89)});
    document.getElementById("tree7").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹7(270.26X324.99px).png","tree7",270.26,324.99)});
    document.getElementById("tree8").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹8(378.01X340.8px).png","tree8",378.01,340.8)});
    document.getElementById("tree9").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹9(366.63X361.15px).png","tree9",366.63,361.15)});
    document.getElementById("tree10").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹10(192.47X261.65px).png","tree10",192.47,261.65)});
    document.getElementById("tree11").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹11(137.21X196.22px).png","tree11",137.21,196.22)});
    document.getElementById("tree12").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹12(85.33X195.65px).png","tree12",85.33,195.65)});
    document.getElementById("tree13").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹13(86.11X179.79px).png","tree13",86.11,179.79)});
    document.getElementById("tree14").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹14(111.59X185.61px).png","tree14",111.59,185.61)});
    document.getElementById("tree15").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹15(152.91X181.68px).png","tree15",152.91,181.68)});
    document.getElementById("tree16").addEventListener('click',function(){
    copy_tree("種子社群街區/行道樹切片/實際大小/行道樹16(399.68X270.07px).png","tree16",399.68,270.07)});

});

function get_position(e1,e2){
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
            document.getElementById(e2).style.left=x+"px";//this is left you know
        }
function back_act(obj_act,obj_id){
    /*drag
    var len=obj_id.length;
    var final_id=obj_id[len-1];//最後一個物件
    //字典中最後一個元素（key）做的動作（value）
    document.getElementById(final_id).style.top=obj_act[len-1]["top"]+"px";
    document.getElementById(final_id).style.left=obj_act[len-1]["left"]+"px";
    */        
    var len=obj_id.length;
    var final_id=obj_id[len-1];//最後一個物件
    id=final_id;
   // id=final_id.split(""); //字元分割 
    /*for (i=0;i<id.length;i+=1)*/ 
   // { alert(obj_id);} 


    var obj = document.getElementById(id[0]);
    var w = $("#"+id[0]).width();
    var h = $("#"+id[0]).height();
    var di=Math.abs(h-w);
    var flag2_array=[90,180,270,0];
    var inx=obj_act[len-1]["ind"];
    var flagx=obj_act[len-1]["flag5"];
    var flagy=obj_act[len-1]["flag6"];

    /*
    這邊把要還原的情況分成 旋轉,鏡射,上升(下降),位移(縮放) 
    因為只會每次只會執行一個動作 所以分開討論
    -----------------旋轉的部分-------------------------
    因為旋轉分成四種情況 [90,180,270,0]
    所以當已經轉了90就讓他轉回0
        轉了180就讓他轉回90
            以此類推
                .
                .
    -----------------鏡射的部分------------------------
    鏡射分成X軸鏡射,跟Y軸鏡射
    如果做了X軸鏡射 就再做一次X軸鏡射 就會變回原樣
    如果做了Y軸鏡射 就再做一次Y軸鏡射 就會變回原樣
    -----------------上升(下降)的部分------------------
    上升,下降 是相對的 所以如果做了上升就做下降回去就對了


    -----------------位移(縮放)----------------
    把原本的記起來 放套回去就對了 就是這麼簡單

    */
    if (obj_act[len-1]["rot"]===1){
        if (inx===2&& h>=w){
            obj.style.transform="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            obj.style.MozTransform="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            
        }else if(inx===3&& h>=w){
            obj.style.transform="rotate("+flag2_array[1]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[1]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[1]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[1]+"deg) ";
        }else if(inx===0 && h>=w){
            obj.style.transform="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            }else if(inx===1 && h>=w){
            obj.style.transform="rotate("+flag2_array[3]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[3]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[3]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[3]+"deg)";
        }else if (inx===2 && h<w){
            obj.style.transform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MozTransform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";"rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
        }else if(inx===3 && h<w){
            obj.style.transform="rotate("+flag2_array[1]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[1]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[1]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[1]+"deg) ";
        }else if(inx===0 && h<w){
            obj.style.transform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
        }else if(inx===1 && h<w){
            obj.style.transform="rotate("+flag2_array[3]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[3]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[3]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[3]+"deg)";
        }
        ind=ind-1;
        ind=ind%4;

        }else if(obj_act[len-1]["scaX"]===1){
            if (ind===0||ind===2){
                document.getElementById(id[2]).style.transform="scaleX("+flagx+")";
                document.getElementById(id[2]).style.MozTransform="scaleX("+flagx+")";
                document.getElementById(id[2]).style.OTransform="scaleX("+flagx+")";
                document.getElementById(id[2]).style.WebkitTransform="scaleX("+flagx+")";
            
            }else if(ind===1||ind===3){
                document.getElementById(id[2]).style.transform="scaleY("+flagx+")";
                document.getElementById(id[2]).style.MozTransform="scaleY("+flagx+")";
                document.getElementById(id[2]).style.OTransform="scaleY("+flagx+")";
                document.getElementById(id[2]).style.WebkitTransform="scaleY("+flagx+")";
            }

            flag5*=-1;
         
        }else if(obj_act[len-1]["scaY"]===1){
            if (ind===1||ind===3){
                document.getElementById(id[2]).style.transform="scaleX("+flagy+")";
                document.getElementById(id[2]).style.MozTransform="scaleX("+flagy+")";
                document.getElementById(id[2]).style.OTransform="scaleX("+flagy+")";
                document.getElementById(id[2]).style.WebkitTransform="scaleX("+flagy+")";
            
            }else if(ind===0||ind===2){
                document.getElementById(id[2]).style.transform="scaleY("+flagy+")";
                document.getElementById(id[2]).style.MozTransform="scaleY("+flagy+")";
                document.getElementById(id[2]).style.OTransform="scaleY("+flagy+")";
                document.getElementById(id[2]).style.WebkitTransform="scaleY("+flagy+")";
            }
            flag6*=-1;

        }else if (obj_act[len-1]["zid"]===1){
            var ar=Object.values(obj_zind);
            document.getElementById(id[0]).style.zIndex=Math.min.apply(null,ar)-1;
            document.getElementById(id[1]).style.zIndex=Math.min.apply(null,ar)-1;
            obj_zind[id[0]]-=1;

        }else if(obj_act[len-1]["zid"]===-1){
            var ar=Object.values(obj_zind);
            document.getElementById(id[0]).style.zIndex=Math.min.apply(null,ar)+1;
            document.getElementById(id[1]).style.zIndex=Math.min.apply(null,ar)+1;
            obj_zind[id[0]]+=1;

        }else if(obj_act[len-1]["del"]===1){
            var hh=obj_act[len-1]["height"];
            var ww=obj_act[len-1]["width"];
            var y=obj_act[len-1]["top"]-"109.6875";
            var x=obj_act[len-1]["left"];
            var zin=obj_act[len-1]["zin"];
            var src=obj_act[len-1]["src"];
            alert(x+","+y);
            rebuild(id[0],id[1],id[2],hh,ww,y,x,zin,src);

        }else{
                document.getElementById(id[0]).style.top=obj_act[len-1]["top"]+"px";
                document.getElementById(id[0]).style.left=obj_act[len-1]["left"]+"px";
                document.getElementById(id[0]).style.width=obj_act[len-1]["width"]+"px";
                document.getElementById(id[0]).style.height=obj_act[len-1]["height"]+"px";
                }
        get_position(id[0],id[1]);//因為你還原之後div1跑回原本位置，但是他的工具列沒有跟著跑回去
                                //所以利用getposition函數再放回去
        
        if(len!==0){
            obj_act.pop();
            obj_id.pop();
        }//因為要取前一個動作跟id 所以每按一次還原就要把array最後一項刪除不然很蠢

    }; //back_act end


function rebuild(e1,e2,e3,hh,ww,y,x,zin,pic_src){
    var dragback=document.getElementById("back_for_drag");
    dragback.style.overflow= "hidden";
    var div1=document.createElement("div");
    div1.id=e1;
    var div2=document.createElement("div");
    div2.id=e2;
    div1.style.zIndex=zin;
    div2.style.zIndex=zin;
    div2.style.top="5px";
    var content="<input class='tool' type='image' src='種子社群街區/車輛切片/放大縮小(58X58px).png' style='width:40px;height:40px;border-top:0px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/旋轉(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/置前(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/置後(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/左右鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/上下鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"+
                "<input class='tool' type='image' src='種子社群街區/車輛切片/上下鏡射(58X58px).png' style='width:40px;height:40px;margin-bottom:-10px'><br>"

    $(div2).append(content);
    var div3=document.createElement("div");
    div3.type="image";
    div3.style.backgroundImage=src;
    div3.id=e3;
    div3.style.height="100%";
    div3.style.width="100%";
    div3.style.display="block";
    div3.style.backgroundRepeat="no-repeat";
    div3.style.backgroundPosition="0 0";
    div3.style.backgroundSize="100% 100%";

    div1.appendChild(div3);
    
    div1.style.position="absolute";
    div1.style.top=y+"px";
    div1.style.left=x+"px";
    div1.style.height=hh;
    div1.style.width=ww;
    div1.style.padding="0.5em";

    var dragback=document.getElementById("back_for_drag");
    dragback.appendChild(div1);
    dragback.appendChild(div2);
        
        
    div2.style.position="absolute";
    div2.style.top="100px";

    div2.style.left="50%";
    //讓新來的知道他原本該轉甚麼樣子
    ind=ind+3;
    ind=parseInt(ind,10);
    ind=ind%4;
    tool2(div1.id);
    obj_id.pop();
    obj_act.pop();
    //讓新來的知道他原本該翻甚麼樣子
    flag5=parseInt(flag5,10);
    flag5=flag5*-1;
    tool5(div1.id,div3.id);
    obj_id.pop();
    obj_act.pop();
    

    function set_tool_id(){
            var x = document.getElementsByClassName("tool");
            var k=1;
            while(x.length > 0) {
                x[0].id = div1.id+"tool"+k;
                x[0].className = "to_changed";  
                k+=1;
            } 
        }//set_tool_id end
        set_tool_id();
        
    function show_border_tree(id){
            //藍色邊框
        document.getElementById(id).style.boxShadow="0 0 0 3px #00DDDD";
        document.getElementById(id).style.borderRadius="2px";
        document.getElementById(id).style.padding="12.5px";
        div1.style.display="";
        div2.style.display="";
    } 

    function get_position(e1,e2){
        var rect1 = document.getElementById(e1).getBoundingClientRect();//此函數的right比較詭異請自己查看看
        var y = rect1.top; //取得區塊最上面的邊的座標. (1)
        var x = rect1.right; //取得區塊最左面的邊的座標 (2)
        var rect2=document.getElementById("line_top").getBoundingClientRect();
        var h=rect2.top;
            document.getElementById(e2).style.top=y+(-1*h)-20+"px";//this is top that you know
            document.getElementById(e2).style.left=x+"px";//this is left you know
       }    
    function tool1_start(e1,e2){//工具列第一個按鈕的縮放功能
        
        show_border_tree(e1);
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
                        show_border_tree(e1);
                        get_position(e1,e2);
                        }
                });//讓物件「產生」縮放功能
        alert("把游標移到邊框按住開始縮放，點擊空白處停止縮放呦");
    }//tool1_start end

    
    function tool2(e1){
        var flag2_array=[90,180,270,0];
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
            obj.style.transform="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            //obj.style.MsTransformOrigin="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            //obj.style.MozTransform="rotate("+flag2_array[ind]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[0]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px)";
        }else if(ind===1 && h>=w){
            obj.style.transform="rotate("+flag2_array[1]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[1]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[1]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[1]+"deg) ";
        }else if(ind===2 && h>=w){
            obj.style.transform="rotate("+flag2_array[2]+"deg)  translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[2]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px) ";
        }else if(ind===3 && h>=w){
            obj.style.transform="rotate("+flag2_array[3]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[3]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[3]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[3]+"deg)";
        }else if (ind===0 && h<w){
            obj.style.transform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.MozTransform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";"rotate("+flag2_array[ind]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
            obj.style.OTransform="rotate("+flag2_array[0]+"deg) translateY("+-0.5*di+"px) translateX("+0.5*di+"px)";
        }else if(ind===1 && h<w){
            obj.style.transform="rotate("+flag2_array[1]+"deg) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[1]+"deg) ";
            obj.style.MozTransform="rotate("+flag2_array[1]+"deg) ";
            obj.style.OTransform="rotate("+flag2_array[1]+"deg) ";
        }else if(ind===2 && h<w){
            obj.style.transform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MsTransformOrigin="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.MozTransform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
            obj.style.OTransform="rotate("+flag2_array[2]+"deg) translateY("+0.5*di+"px) translateX("+-0.5*di+"px) ";
        }else if(ind===3 && h<w){
            obj.style.transform="rotate("+flag2_array[3]+"deg)";
            obj.style.MsTransformOrigin="rotate("+flag2_array[3]+"deg)";
            obj.style.MozTransform="rotate("+flag2_array[3]+"deg)";
            obj.style.OTransform="rotate("+flag2_array[3]+"deg)";
        }
        
        get_position(div1.id,div2.id);
        ind+=1;
        ind=ind%4;
        show_border_tree(div1.id);
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
        show_border_tree(e1);
        flag5*=-1;
        obj_id.push([div1.id,div2.id,div3.id]);// 把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"scaX":1,"flag5":flag5});
    }//tool5 end
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
        show_border_tree(e1);
        flag6*=-1;
        obj_id.push([div1.id,div2.id,div3.id]);// 把可能會用錯該死的東西塞進去字典裡
        obj_act.push({"scaY":1,"flag6":flag6});// scaY:1表示你讓他翻了 flag6就是翻的情況
    }//tool6 end

     
    
     function tool7(e1,e2,e3){//delete
        obj_id.push([div1.id,div2.id,div3.id]);
        var obj7=document.getElementById(e1);
        hh=obj7.style.height;
        ww=obj7.style.width;
        var rect1 = document.getElementById(e1).getBoundingClientRect()
        y=rect1.top;
        x=rect1.left;
        zin=obj7.style.zIndex;
        var obj1=document.getElementById(e3);
        src=obj1.style.backgroundImage;
        

        obj_act.push({"del":1,"height":hh,"width":ww,"top":y,"left":x,"zin":zin,"scr":src
        });
　　     obj7.remove();
        var obj8=document.getElementById(e2);
        obj8.remove();
    }

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
    div1.addEventListener('dblclick',function(){show_border_tree(div1.id)});
    
    var obj1=document.getElementById( div1.id+"tool1")//縮放
    obj1.addEventListener("click",function(){tool1_start(div1.id,div2.id)});

    var obj2=document.getElementById( div1.id+"tool2")//旋轉
    obj2.addEventListener("click",function(){tool2(div1.id)});

    var obj3=document.getElementById( div1.id+"tool3")//物件往前
    obj3.addEventListener("click",function(){tool3(div1.id,div2.id)});

    var obj4=document.getElementById( div1.id+"tool4")//物件往前
    obj4.addEventListener("click",function(){tool4(div1.id,div2.id)});

    var obj5=document.getElementById( div1.id+"tool5")//橫的鏡射
    obj5.addEventListener("click",function(){tool5(div1.id,div3.id)});

    var obj6=document.getElementById( div1.id+"tool6")//直的鏡射
    obj6.addEventListener("click",function(){tool6(div1.id,div3.id)});

    var obj7=document.getElementById( div1.id+"tool7")//刪除
    obj7.addEventListener("click",function(){tool7(div1.id,div2.id,div3.id)});

    $(document).mouseup(function(e) //點擊空白處框框消失加工具結束
    {
        var container = $(div1);
        var tool1=$(div1.id+"tool1");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && !tool1.is(e.target) && container.has(e.target).length === 0) {
            container.css('borderStyle','none');   // 點擊空白處會發生甚麼4
            container.css('boxShadow','0 0 0 0px');
            $(div2).css('display','none');
            //點擊空白處要讓所有功能消失的啦
            $(div1).resizable({ disabled: true });//禁用tool1的縮放功能(不是移除喔！)
        }
    });

};//rebuild end  