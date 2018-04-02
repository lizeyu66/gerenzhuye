{
	var btns=document.querySelectorAll(".s_nav");
	var cons=document.querySelectorAll(".work_img");
	for(let i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			for(let j=0;j<btns.length;j++){
				cons[j].style.zIndex="";
			}
			cons[i].style.zIndex=10;
		}
	}
//进度条
$(".xt").each(function(index,ele){
	$(this).mouseenter(function(){
		$(".xt1").eq(index).show();
	})
})
	//totop
	$(".totop1").click(function(){
        $("html,body").animate({scrollTop:0},500)
	})

}
