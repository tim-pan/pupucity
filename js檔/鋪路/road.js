$(function(){
    var road_click =[0];//裝你上次點了什麼才能復原，預設一個元素是0
    function road_color(){
        var co3=document.getElementById("jscolor3").value;
        document.getElementById("paveroad").style.visibility='hidden';
        document.getElementById("pcolor3").style.backgroundColor='#'+co3;
    }
    function paveroad2(){
        road_click.push("鋪路2");
        var x1=document.getElementById("paveroad").style.visibility;
        if (x1==="hidden"){
            document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路2.png";
            document.getElementById("paveroad").style.visibility='';
            document.getElementById("pcolor3").style.backgroundColor="transparent";

        }else{
            if (road_click[0]===road_click[1]){
                document.getElementById("paveroad").style.visibility='hidden';
            }else{
                document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路2.png"
                document.getElementById("paveroad").style.visibility=''
            }

        }
        
        road_click.splice(0, 1);
    }   

    function paveroad3(){
        road_click.push("鋪路3");
        var x1=document.getElementById("paveroad").style.visibility;
        if (x1==="hidden"){
            document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路3.png";
            document.getElementById("paveroad").style.visibility='';
            document.getElementById("pcolor3").style.backgroundColor="transparent";

        }else{
            if (road_click[0]===road_click[1]){
                document.getElementById("paveroad").style.visibility='hidden';
            }else{
                document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路3.png"
                document.getElementById("paveroad").style.visibility=''
            }

        }
        
        road_click.splice(0, 1);
    }   

    function paveroad4(){
        road_click.push("鋪路4");
        var x1=document.getElementById("paveroad").style.visibility;
        if (x1==="hidden"){
            document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路4.png";
            document.getElementById("paveroad").style.visibility='';
            document.getElementById("pcolor3").style.backgroundColor="transparent";

        }else{
            if (road_click[0]===road_click[1]){
                document.getElementById("paveroad").style.visibility='hidden';
            }else{
                document.getElementById("paveroad").src="種子社群街區/鋪路切片/鋪路4.png"
                document.getElementById("paveroad").style.visibility=''
            }

        }
        
        road_click.splice(0, 1);
    } 

    document.getElementById("jscolor3").addEventListener('change',function(){road_color()});
    document.getElementById("road2").addEventListener('click',function(){paveroad2()});
    document.getElementById("road3").addEventListener('click',function(){paveroad3()});
    document.getElementById("road4").addEventListener('click',function(){paveroad4()});
    
});
