$(function(){
    var button_click =[0];
    function change2out(){
        document.getElementById("image1").src="種子社群街區/介面切片/關閉選單按鈕1.png"
        
    }
    function change2flow(){
        document.getElementById("image1").src="種子社群街區/介面切片/關閉選單按鈕2.png"
    }

    function change2end(){
        /*關閉背景選單*/
        List3.style.display='none'
        image1.style.display='none'
        document.getElementById("imageField1").src="種子社群街區/介面切片/背景按鈕.png"   
        /*關閉地形選單*/
        document.getElementById("List4").style.display='none'
        document.getElementById("image1").style.display='none'
        document.getElementById("imageField2").src="種子社群街區/介面切片/地形按鈕.png"
        /*關閉鋪路*/
        document.getElementById("List5").style.display='none'
        document.getElementById("image1").style.display='none'
        document.getElementById("imageField3").src="種子社群街區/介面切片/鋪路按鈕.png"
        /*關閉設備*/
        document.getElementById("List6").style.display='none';
        document.getElementById("List6-2").style.display='none';
        document.getElementById("List6-3").style.display='none';
        document.getElementById("List6-4").style.display='none';
        document.getElementById("List6-5").style.display='none';

        document.getElementById("image1").style.display='none';
        document.getElementById("imageField4").src="種子社群街區/介面切片/設備按鈕.png";
        document.getElementById("imageField17").style.visibility='hidden';
        document.getElementById("imageField18").style.visibility='hidden';
        /*關閉房屋*/
        document.getElementById("List7").style.display='none';
        document.getElementById("List7-2").style.display='none';
        document.getElementById("image1").style.display='none';
        document.getElementById("imageField5").src="種子社群街區/介面切片/房屋按鈕.png";
        document.getElementById("imageField19").style.visibility='hidden';
        document.getElementById("imageField20").style.visibility='hidden';
        /*關閉車輛*/
        document.getElementById("List9").style.display='none';
        document.getElementById("image1").style.display='none';
        document.getElementById("imageField6").src="種子社群街區/介面切片/車輛按鈕.png";
        /*關閉行道樹*/
        document.getElementById("List8").style.display='none';
        document.getElementById("List8-2").style.display='none';
        document.getElementById("image1").style.display='none';
        document.getElementById("imageField7").src="種子社群街區/介面切片/行道樹按鈕.png";
        document.getElementById("imageField21").style.visibility='hidden';
        document.getElementById("imageField22").style.visibility='hidden';
        /*圖檔*/
        document.getElementById("imageField9").src="種子社群街區/介面切片/上傳圖檔按鈕.png";
    }
   

    function change1(){
        button_click.push("地形");
        var x1=document.getElementById("image1").style.display;

        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField2").src="種子社群街區/介面切片/點選地形按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("List4").style.display='';
            }else{
                change2end();
            }

        }else{
            change2end();
            document.getElementById("imageField2").src="種子社群街區/介面切片/點選地形按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("List4").style.display='';
        }
        button_click.splice(0, 1);//用完動作就把第一個砍掉，城市負擔才不會太大

    }
    function change2(){
        button_click.push("背景");
        var x1=document.getElementById("image1").style.display;

        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField1").src="種子社群街區/介面切片/點選背景按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("List3").style.display='';
            }else{
                change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField1").src="種子社群街區/介面切片/點選背景按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("List3").style.display='';
        }
        button_click.splice(0, 1);
    }
    function change3(){
        button_click.push("鋪路");
        var x1=document.getElementById("image1").style.display;

        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField3").src="種子社群街區/介面切片/點選鋪路按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("List5").style.display='';
            }else{
                change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField3").src="種子社群街區/介面切片/點選鋪路按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("List5").style.display='';
        }
        button_click.splice(0, 1);
    }
    function change4(){
        button_click.push("設備");
        var x1=document.getElementById("image1").style.display;
        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField4").src="種子社群街區/介面切片/點選設備按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("imageField18").style.visibility='';
                document.getElementById("List6").style.display='';
            }else{
                change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField4").src="種子社群街區/介面切片/點選設備按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6").style.display='';
        }
        button_click.splice(0, 1);
    }

    function change4flow_left(){
        document.getElementById("imageField17").src="種子社群街區/設備切片/選單上一頁(62X68px).png"
    }

    function change4out_left(){
        document.getElementById("imageField17").src="種子社群街區/介面切片/左移鍵.png"
    }

    function change4flow_right(){
        document.getElementById("imageField18").src="種子社群街區/設備切片/選單下一頁(62X68px).png"
    }

    function change4out_right(){
        document.getElementById("imageField18").src="種子社群街區/介面切片/右移鍵.png"
    }

    function change5(){
        button_click.push("房屋");
        var x1=document.getElementById("image1").style.display;
        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField5").src="種子社群街區/介面切片/點選房屋按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("imageField20").style.visibility='';
                document.getElementById("List7").style.display='';
            }else{
                 change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField5").src="種子社群街區/介面切片/點選房屋按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("imageField20").style.visibility='';
            document.getElementById("List7").style.display='';
        }
        button_click.splice(0, 1);
    }

    function change5flow_left(){
        document.getElementById("imageField19").src="種子社群街區/設備切片/選單上一頁(62X68px).png"
    }

    function change5out_left(){
        document.getElementById("imageField19").src="種子社群街區/介面切片/左移鍵.png"
    }

    function change5flow_right(){
        document.getElementById("imageField20").src="種子社群街區/設備切片/選單下一頁(62X68px).png"
    }

    function change5out_right(){
        document.getElementById("imageField20").src="種子社群街區/介面切片/右移鍵.png"
    }
	function change6(){
        button_click.push("車輛");
        var x1=document.getElementById("image1").style.display;
        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField6").src="種子社群街區/介面切片/點選車輛按鈕.png";
                document.getElementById("image1").style.display='';
                document.getElementById("List9").style.display='';
            }else{
                 change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField6").src="種子社群街區/介面切片/點選車輛按鈕.png";
            document.getElementById("image1").style.display='';
            document.getElementById("List9").style.display='';
        }
        button_click.splice(0,1);

    }
    function change7(){
        button_click.push("行道樹");
        var x1=document.getElementById("image1").style.display;
        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField7").src="種子社群街區/介面切片/點選行道樹按鈕.png"
                document.getElementById("image1").style.display=''
                document.getElementById("imageField22").style.visibility=''
                document.getElementById("List8").style.display=''
            }else{
                 change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField7").src="種子社群街區/介面切片/點選行道樹按鈕.png"
            document.getElementById("image1").style.display=''
            document.getElementById("imageField22").style.visibility=''
            document.getElementById("List8").style.display=''
        }
        button_click.splice(0, 1);
    }
    function change7flow_left(){
        document.getElementById("imageField21").src="種子社群街區/設備切片/選單上一頁(62X68px).png"
    }

    function change7out_left(){
        document.getElementById("imageField21").src="種子社群街區/介面切片/左移鍵.png"
    }

    function change7flow_right(){
        document.getElementById("imageField22").src="種子社群街區/設備切片/選單下一頁(62X68px).png"
    }

    function change7out_right(){
        document.getElementById("imageField22").src="種子社群街區/介面切片/右移鍵.png"
    }

    function change87(){
        button_click.push("圖檔");
        var x1=document.getElementById("image1").style.display;
        if (button_click[0]===button_click[1]){
            if (x1==="none"){
                document.getElementById("imageField9").src="種子社群街區/介面切片/點選上傳圖檔按鈕.png";
            }else{
                 change2end();
            }
        }else{
            change2end();
            document.getElementById("imageField9").src="種子社群街區/介面切片/點選上傳圖檔按鈕.png";
        }
        button_click.splice(0,1);
	}
		
    function change88(){
        change2end();
        document.getElementById("imageField9").src="種子社群街區/介面切片/上傳圖檔按鈕.png"
		}
	
    /*這是按下選單右邊下一頁按鈕的情況*/
    function press_btn_right_house(){
            document.getElementById("imageField19").style.visibility=''
            document.getElementById("imageField20").style.visibility='hidden'
            document.getElementById("List7-2").style.display=''
            document.getElementById("List7").style.display='none'
            image1.style.display='';
            document.getElementById("imageField5").src="種子社群街區/介面切片/點選房屋按鈕.png";

    }

    /*和上面相似，不再做說明*/
    function press_btn_left_house(){
        document.getElementById("imageField19").style.visibility='hidden'
            document.getElementById("imageField20").style.visibility=''
            document.getElementById("List7-2").style.display='none'
            document.getElementById("List7").style.display=''
            image1.style.display='';
            document.getElementById("imageField5").src="種子社群街區/介面切片/點選房屋按鈕.png";

    }
       
    //共三頁選單，第一頁叫List6，再來6-2，最後6-3
    /*這是按下選單右邊下一頁按鈕的情況*/
    function press_btn_right_equi(){
        alert("lll")
        var x1=document.getElementById("List6").style.display
        var x2=document.getElementById("List6-2").style.display
        var x3=document.getElementById("List6-3").style.display
        var x4=document.getElementById("List6-4").style.display;
        var x5=document.getElementById("List6-5").style.display;
        /*若按下下一頁按鍵的時候選單在第一頁，也就是List6的display為空*/
        if (x1==='' && x2==='none' && x3==='none' && x4==='none' && x5==='none'){
            document.getElementById("imageField17").style.visibility=''
            document.getElementById("imageField18").style.visibility=''
            document.getElementById("List6-2").style.display=''
            document.getElementById("List6").style.display='none'
        /*若按下下一頁按鍵的時候選單在第二頁，也就是List6-2的display為空*/
        }else if(x1==='none' && x2==='' && x3==='none' && x4==='none' && x5==='none'){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6-3").style.display='';
            document.getElementById("List6-2").style.display='none';
        }else if (x1==='none' && x2==='none' && x3==='' && x4==='none' && x5==='none'){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6-4").style.display='';
            document.getElementById("List6-3").style.display='none';
        }else if (x1==='none' && x2==='none' && x3==='none' && x4==='' && x5==='none'){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='hidden';
            document.getElementById("List6-5").style.display='';
            document.getElementById("List6-4").style.display='none';

        }
        image1.style.display='';
        document.getElementById("imageField4").src="種子社群街區/介面切片/設備按鈕.png";

    }

    /*和上面相似，不再做說明*/
    function press_btn_left_equi(){
        var x1=document.getElementById("List6").style.display;
        var x2=document.getElementById("List6-2").style.display;
        var x3=document.getElementById("List6-3").style.display;
        var x4=document.getElementById("List6-4").style.display;
        var x5=document.getElementById("List6-5").style.display;
        if (x1==='none' && x2==='none' && x3==='' && x4==='none'&& x5==='none'){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6-2").style.display='';
            document.getElementById("List6-3").style.display='none';
        }else if(x1==='none' && x2==='' && x3==='none' && x4==='none'&& x5==='none'){
            document.getElementById("imageField17").style.visibility='hidden';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6").style.display='';
            document.getElementById("List6-2").style.display='none';
        }else if (x1==='none' && x2==='none' && x3==='none' && x4==='' && x5==='none'){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6-3").style.display='';
            document.getElementById("List6-4").style.display='none';
        }else if (x1==='none' && x2==='none' && x3==='none' && x4==='none' && x5===''){
            document.getElementById("imageField17").style.visibility='';
            document.getElementById("imageField18").style.visibility='';
            document.getElementById("List6-5").style.display='none';
            document.getElementById("List6-4").style.display='';

        }
        image1.style.display='';
        document.getElementById("imageField4").src="種子社群街區/介面切片/設備按鈕.png";

    }//press_btn_left_equi end
    /*這是按下選單右邊下一頁按鈕的情況*/
    function press_btn_right_tree(){
        document.getElementById("imageField21").style.visibility=''
        document.getElementById("imageField22").style.visibility='hidden'
        document.getElementById("List8-2").style.display=''
        document.getElementById("List8").style.display='none'
        image1.style.display='';
        document.getElementById("imageField7").src="種子社群街區/介面切片/點選行道樹按鈕.png"


    }   

/*和上面相似，不再做說明*/
    function press_btn_left_tree(){
        document.getElementById("imageField21").style.visibility='hidden'
        document.getElementById("imageField22").style.visibility=''
        document.getElementById("List8-2").style.display='none'
        document.getElementById("List8").style.display=''
        image1.style.display='';
        document.getElementById("imageField7").src="種子社群街區/介面切片/點選行道樹按鈕.png"

    }

    function change14flow(){
        document.getElementById("imageField14").src="種子社群街區/介面切片/飄移叉叉鍵.png"
    }       
    function change14out(){
        document.getElementById("imageField14").src="種子社群街區/介面切片/叉叉鍵.png"
    }
    function back(){
        window.history.back();
    }
    function scr_left_button_in(){
        document.getElementById("imageField15").src="種子社群街區/設備切片/選單上一頁(62X68px).png";
    }
    function scr_left_button_out(){
        document.getElementById("imageField15").src="種子社群街區/介面切片/左移鍵.png";
    }
    function scr_right_button_in(){
        document.getElementById("imageField16").src="種子社群街區/設備切片/選單下一頁(62X68px).png";
    }
    function scr_right_button_out(){
        document.getElementById("imageField16").src="種子社群街區/介面切片/右移鍵.png";
    }
    $(document).mouseup(function(e) //點擊空白處框框消失加工具結束
    {
        var container1 = $("#List3");
        var cont2=$("#List4");
        var cont3=$("#List5");
        var cont4=$("#List6");
        var cont5=$("#List6-2");
        var cont6=$("#List6-3");
        var cont7=$("#List6-4");
        var cont8=$("#List6-5");
        var cont9=$("#List7");
        var cont10=$("#List7-2");
        var cont11=$("#List8");
        var cont12=$("#List8-2");
        var cont13=$("#List9");
        
        // if the target of the click isn't the container nor a descendant of the container
        if ((!container1.is(e.target) &&  container1.has(e.target).length === 0)&&
            (!cont2.is(e.target) &&  cont2.has(e.target).length === 0) &&
            (!cont3.is(e.target) &&  cont3.has(e.target).length === 0) &&
            (!cont4.is(e.target) &&  cont4.has(e.target).length === 0) &&
            (!cont5.is(e.target) &&  cont5.has(e.target).length === 0) &&
            (!cont6.is(e.target) &&  cont6.has(e.target).length === 0) &&
            (!cont7.is(e.target) &&  cont7.has(e.target).length === 0) &&
            (!cont8.is(e.target) &&  cont8.has(e.target).length === 0) &&
            (!cont9.is(e.target) &&  cont9.has(e.target).length === 0) &&
            (!cont10.is(e.target) &&  cont10.has(e.target).length === 0) &&
            (!cont11.is(e.target) &&  cont11.has(e.target).length === 0) &&
            (!cont12.is(e.target) &&  cont12.has(e.target).length === 0) &&
            (!cont13.is(e.target) &&  cont13.has(e.target).length === 0)) 

        {
            change2end();
           //點擊空白處要讓所有功能消失的啦
        }
    });


document.getElementById("imageField2").addEventListener("click",function(){change1()});
document.getElementById("imageField1").addEventListener("click",function(){change2()});
document.getElementById("imageField3").addEventListener("click",function(){change3()});
document.getElementById("imageField4").addEventListener("click",function(){change4()});
document.getElementById("imageField5").addEventListener("click",function(){change5()});
document.getElementById("imageField6").addEventListener("click",function(){change6()});
document.getElementById("imageField7").addEventListener("click",function(){change7()});
document.getElementById("imageField9").addEventListener("click",function(){change87()});
document.getElementById("upload3").addEventListener("click",function(){change88()});

//設備選單的左移按鍵
document.getElementById("imageField17").addEventListener("mouseover",function(){change4flow_left()});
document.getElementById("imageField17").addEventListener("mouseout",function(){change4out_left();});
//設備選單的右移按鍵
document.getElementById("imageField18").addEventListener("mouseover",function(){change4flow_right();});
document.getElementById("imageField18").addEventListener("mouseout",function(){change4out_right();});
//房屋選單的左移按鍵
document.getElementById("imageField19").addEventListener("mouseover",function(){change5flow_left();});
document.getElementById("imageField19").addEventListener("mouseout",function(){change5out_left();});
//房屋選單的右移按鍵
document.getElementById("imageField20").addEventListener("mouseover",function(){change5flow_right();});
document.getElementById("imageField20").addEventListener("mouseout",function(){change5out_right();});
//行道樹選單的左移按鍵
document.getElementById("imageField21").addEventListener("mouseover",function(){change7flow_left();});
document.getElementById("imageField21").addEventListener("mouseout",function(){change7out_left();});
//行道樹選單的右移按鍵
document.getElementById("imageField22").addEventListener("mouseover",function(){change7flow_right();});
document.getElementById("imageField22").addEventListener("mouseout",function(){change7out_right();});
//設備選單的左移按鍵功能
document.getElementById("imageField17").addEventListener("click",function(){press_btn_left_equi();});
//設備選單的右移按鍵功能
document.getElementById("imageField18").addEventListener("click",function(){press_btn_right_equi();});
//房屋選單的左移按鍵功能
document.getElementById("imageField19").addEventListener("click",function(){press_btn_left_house();});
//房屋選單的右移按鍵功能
document.getElementById("imageField20").addEventListener("click",function(){press_btn_right_house();});
//行道樹選單的左移按鍵功能
document.getElementById("imageField21").addEventListener("click",function(){press_btn_left_tree();});
//行道樹選單的右移按鍵功能
document.getElementById("imageField22").addEventListener("click",function(){press_btn_right_tree();});
//右上那個大叉叉鍵，回上一頁
document.getElementById("imageField14").addEventListener("click",function(){back();});
//關閉選單按鍵滑鼠移進會變色（圖片）
document.getElementById("image1").addEventListener("mouseover",function(){change2flow();});
//關閉選單按鍵滑鼠移出會變色（圖片）
document.getElementById("image1").addEventListener("mouseout",function(){change2out();});
//關閉選單
document.getElementById("image1").addEventListener("click",function(){change2end();});
//滾動條左移鍵的移動進去變藍色（換圖片功能）
document.getElementById("imageField15").addEventListener("mouseover",function(){scr_left_button_in()});
//滾動條左移鍵的移出去變白色（換圖片功能）
document.getElementById("imageField15").addEventListener("mouseout",function(){scr_left_button_out()});
//滾動條右移鍵的移動進去變藍色（換圖片功能）
document.getElementById("imageField16").addEventListener("mouseover",function(){scr_right_button_in()});
//滾動條右移鍵的移出去變白色（換圖片功能）
document.getElementById("imageField16").addEventListener("mouseout",function(){scr_right_button_out()});


});
