

window.onload=function(){
    var dianji=document.getElementById('dianji');
    var two=document.getElementById('two');
    dianji.onclick=function(){
            if(two.style.display=='none'){ // == 判断div.display是否为显示
                    two.style.display='block'; //= 赋值也可了解成改变
                }
                else{
                    two.style.display='none';
                }
        }
};


