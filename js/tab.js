//选项卡
window.onload=function(){
	/*var biaotis=getClass("biaotis"); //集合
	var biao=getClass("biao");

	for(var i=0;i<biaotis.length;i++){  //给每一个标题添加单击事件
		biaotis[i].index=i;  //保存相应对象的i的值
		
		biaotis[i].onclick=function(){
			//alert(this,index);
			for(var j=0;j<biao.length;j++){
				biao[j].style.display="none";
				biaotis[j].style.fontWeight="normal";
				biaotis[j].style.textDecoration="none";
			}
			biao[this.index].style.display="block";

			this.style.fontWeight="bold";
            this.style.textDecoration="underline";
		}
	}
*/

        var onearr=[];
        var twoarr=[];
        var threearr=[];
        var fourarr=[];
        var con=getClass("hang");
        var title=getClass("biaotis");
       
      
        for(var i=0;i<55;i++){
          onearr.push("image/mingpai"+i+".jpg");
          twoarr.push("image/mingpai"+i+".jpg");
          threearr.push("image/mingpai"+i+".jpg");
          fourarr.push("image/mingpai"+i+".jpg"); 
        }
              
       
        function randomImg(arr){
          var newarr=[];
           
          for(var i=0;i<24;i++){
            newarr.push(arr[parseInt(Math.random()*55)])
          }

          return newarr;
        }
         var arr=[onearr,twoarr,threearr,fourarr]
        function show(num){
          var imgarr=randomImg(arr[num]);
          for(var i=0;i<imgarr.length;i++){
            var divs=document.createElement("div");
            divs.style.cssText="width:134px;height:80px;border:1px solid white;float:left;background:pink;position:relative";
            var as=document.createElement("a");
            as.href="#";
            var imgs=document.createElement("img");
            imgs.src=imgarr[i];
            as.appendChild(imgs);
            imgs.style.cssText="width:134px;height:80px;"
            divs.appendChild(as);
            con[num].appendChild(divs);
          }
        }
        show(0);

        for(var i=0;i<title.length;i++){
          title[i].index=i;
          title[i].flag=true;
          title[0].flag=false;
          var now=0;
          title[i].onclick=function(){
            now=this.index;
            for(var j=0;j<con.length;j++){
              con[j].style.display="none";
            }
            con[this.index].style.display="block";
            if(this.flag){
              show(this.index);
              this.flag=false;
            }
          }
        }
        
        var btn=$(".biaoti-1-4-2")[0];
        
        btn.onclick=function(){
          con[now].innerHTML="";
          show(now);
        }




//桃心
		function a(){
		var kuang=getClass("kuang");
		var xin=getClass("xin");
		for(var i=0;i<kuang.length;i++){
			kuang[i].index=i;
			kuang[i].onmouseover=function(){
				xin[this.index].style.display="block";
			}
			kuang[i].onmouseout=function(){
				xin[this.index].style.display="none";
			}
		}
	}
    a();



//轮播
    function b(){
        var imgss=$(".imgss");
       	var btn=$(".btn");
        //alert(btn.length);
        var trt=$(".banner")[0];
        var bgcolor=["#E8E8E8","#FFCC00","#E8E8E8","#2D3075"];

       	var num=1;
       	function move(){
       		if(num==4){
       			num=0;
       		}
       		for(var i=0;i<imgss.length;i++){
                imgss[i].style.zIndex=2;
               // alert(i)
       		};
          for(var i=0;i<btn.length;i++){
               btn[i].style.background="#000";
          };
       		imgss[num].style.zIndex=3;
       		btn[num].style.background="#fff";
          trt.style.background=bgcolor[num];
       		num++;
       	}
       	var t=setInterval(move,1000);




        for(var i=0;i<btn.length;i++){
        	btn[i].index=i;
        	btn[i].onmouseover=function(){
        		clearInterval(t);
        		for(var j=0;j<imgss.length;j++){
        			imgss[j].style.zIndex=1;
        		};
            for(var j=0;j<btn.length;j++){
               btn[j].style.background="#000";
            };
        		imgss[this.index].style.zIndex=2;
                trt.style.background=bgcolor[this.index];
                btn[this.index].style.background="#fff";

        	}
        	btn[i].onmouseout=function(){
        		t=setInterval(move,2000);
        		num=this.index+1;
        	}
        }
    }
    b();

//搜索

  function c(){
    var tex=$("#tex");
        tex.onfocus=function(){
           //表单获得焦点
           if(tex.value=="魅力惠入驻！时尚轻奢首选"){
            tex.value=""};
        };
        tex.onblur=function(){
          //表单失去焦点
          if(tex.value==""){
          tex.value="魅力惠入驻！时尚轻奢首选";
          }
        }
  }
 c();










//窗口浮动
 /*function d(){
      var box=$(".box")[0];
      var close=$(".close")[0];
      var sheedx=5;//窗口每次在x，y轴移动的速度，距离
      var sheedy=5;
      var cw=document.documentElement.clientWidth;//浏览器的宽
      var ch=document.documentElement.clientHeight;//浏览器的高
      window.onresize=function(){
        //窗口的改变事件，所要发生的程序
          cw=document.documentElement.clientWidth;//浏览器的宽
          ch=document.documentElement.clientHeight;//浏览器的高
      }
      var ow=box.offsetWidth;//盒子的宽高
      var oh=box.offsetHeight;
      function move(){
        var x=box.offsetLeft+sheedx;//盒子的左边距加上盒子移动的距离；
        var y=box.offsetTop+sheedy;//加上速度；
        if(x>(cw-ow)){//浏览器的宽高减去盒子的宽高
          x=cw-ow;
          sheedx*=-1;//改变方向
        }
        if(x<=0){
          x=0;//将盒子的x轴的值变为0，保证不超出浏览器的页面
          sheedx*=-1;//改变方向
        }
        if(y>(ch-oh)){
           y=ch-oh;
          sheedy*=-1;
        }
        if(y<=0){
          y=0;
          sheedy*=-1;
        }
        box.style.left=x+"px";
        box.style.top=y+"px";
      }

      var t=setInterval(move,60);
      box.onmouseover=function(){
        clearInterval(t);
      }
      box.onmouseout=function(){
        t=setInterval(move,60);
      }
      close.onclick=function(){
        box.style.display="none";
      }
 }
 d();*/




 //楼层跳转
 function e(){
        var search=$(".search")[0];
      var flag=true;
      var flag1=true;//0--440  440-3000
        var floors=$(".louceng");

      var jump=$(".jump")[0];
        var btn=$("li",jump);
        //alert(floors[1].offsetTop)

//按钮控制滚动条
        for(var i=0;i<btn.length;i++){
          btn[i].index=i;
          btn[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
          }
        }

      window.onscroll=function(){

            //按需加载
      var floor=$(".floor");
      
      var ch=document.documentElement.clientHeight;
      /*window.onscroll=function(){*/
          var scrollT=getScrollT();
          for(var i=0;i<floor.length;i++){
          if(floor[i].offsetTop<scrollT+ch){
            //当前楼层到顶部的高度，如果小于页面内容超出浏览器的距离+浏览器的距离时
                  var imgs=$("img",floor[i]);//获取当前楼层的所有图片
                  for(var j=0;j<imgs.length;j++){//遍历图片
                    imgs[j].src=imgs[j].getAttribute("aa");//每一个图片的aa属性的值赋值给src属性
                  }
          /*}*/
        }
      }


        //搜索框的显示与隐藏
        var scrollT=getScrollT();
        if(scrollT>=440){
          if(flag){//为了保证页面往下拉时只有一个animate函数执行
            animate(search,{top:0},500);
            flag=false;
            flag1=true;
          }           
        }else{
                if(flag1){
                  animate(search,{top:-50});
                  flag1=false;
                  flag=true;
                }         
        }


        //楼层跳转
          if(scrollT>=1180){
            jump.style.display="block";
          }else{
            jump.style.display="none";
          }
//滚动条控制按钮
            for(var i=0;i<floors.length;i++){
              floors[i].t=floors[i].offsetTop;//
              if(floors[i].t<scrollT+100){//如果scrollTop大于当前楼层的top
                //alert(11111)
                for(var j=0;j<btn.length;j++){
                  btn[j].style.color="black";
                }
                btn[i].style.color="red";
              }
              //floors[i].index=i;
            }


      }



 }
 e();



//搜索2

  function f(){
    var texts=$("#texts");
        texts.onfocus=function(){
           //表单获得焦点
           if(texts.value=="魅力惠入驻！时尚轻奢首选"){
            texts.value=""};
        };
        texts.onblur=function(){
          //表单失去焦点
          if(texts.value==""){
          texts.value="魅力惠入驻！时尚轻奢首选";
          }
        }
  }
 f();



//侧轮播
 function g(num){
        var bannerbox=$(".loucengsss")[num];
      var left=$(".louceng-1-left-2-left")[num];
      var right=$(".louceng-1-left-2-right")[num];
      var flg1=true;
      function aa(){
        if(flg1==true){
          flg1=false;
        animate(bannerbox,{marginLeft:-210},1000,function(){
          var fir=getFirst(this);
          this.appendChild(fir);
          this.style.marginLeft=0;
          flg1=true;
        })
        }
      }
      var t=setInterval(aa,3000)
      left.onmouseover=right.onmouseover=function(){
        clearInterval(t);
      }
      left.onmouseout=right.onmouseover=function(){
        t=setInterval(aa,3000);
      }
      right.onclick=function(){
        aa();
      }
      left.onclick=function(){
        var last=getLast(bannerbox);
            var first=getFirst(bannerbox);
          bannerbox.insertBefore(last,first);
            bannerbox.style.marginLeft="-210px";
            animate(bannerbox,{marginLeft:0},1000)
      }
}
 g(0);
 g(1);
 g(2);
 g(3);
 g(4);





// 右侧固定定位动效
  var position1=getClass("gd-position")[0]
    var fly=position1.getElementsByTagName("p")
    var box35=getClass("box35")
    var box100=getClass("box100")[0]
    for (var i = 0; i < fly.length; i++) {
        box35[i].index=i
        box35[i].onmouseover=function(){
            this.flag=true;
            var aa=this
            aa.style.backgroundColor="red"
            setTimeout(function(){
                if(aa.flag){
                   fly[aa.index].style.zIndex=99 
                   fly[aa.index].style.display="block"
                   animate(fly[aa.index],{right:35},200) 
                }
            },200)
            
        }
        box35[i].onmouseout=function(){
            this.flag=false
            this.style.backgroundColor="#000"            
            animate(fly[this.index],{right:80},200,function(){
               this.style.display="none" 
            })
        }
    };
    box100.onmouseover=function(){
        this.style.backgroundColor="red"
    }
    box100.onmouseout=function(){
        this.style.backgroundColor="#000"
    }

    // 点击top返回最顶端
    var toTop=getLast(position1)
    toTop.onclick=function(){
        var obj=document.documentElement.scrollTop==0?document.body:document.documentElement
        animate(obj,{scrollTop:0},500)
    }





  //左移
     var move=$(".f1you11")[0];
   var moveimg=$("img",move);   
   for(var i=0;i<moveimg.length;i++){
    moveimg[i].index=i;
    moveimg[i].onmouseover=function(){
         moveimg[this.index].style.cssText="position:relative;left:-6px";
    }
    moveimg[i].onmouseout=function(){
          moveimg[this.index].style.cssText="position:relative;left:0px";
    }

   }





 //下拉效果

function m(){
  var yiji=$(".yiji");
  
      var erji=$(".erji");

        for (var i = 0; i < yiji.length; i++) {
          yiji[i].index=i;
          hover(yiji[i],function(){
             var lis=$("div",erji[this.index]);
             var h=lis[0].offsetHeight;
             erji[this.index].style.height=0+"px";
             animate(erji[this.index],{height:lis.length*h},300,Tween.Linear);
            },function(){
             animate(erji[this.index],{height:0},300,Tween.Linear);
            }
          )
        }
}
m();





//导航栏隐藏
function k(){
   var daos=getClass("ten");
    var fus=getClass("youyincang");
    for (var i = 0; i < daos.length; i++) {
      daos[i].index=i;
      daos[i].onmouseover=function(){
        this.flag=true;
        var aa=this;
        setTimeout(function(){
        if(aa.flag){  
          fus[aa.index].style.display="block";
          animate(fus[aa.index],{left:200,opacity:1},200)
         }
           },100)
        }

      daos[i].onmouseout=function(){
        this.flag=false;
       
        animate(fus[this.index],{left:170,opacity:1},300,function(){
          this.style.display="none";
        })
      }
    }
  }
  k();




}