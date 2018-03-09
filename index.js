{
	// let imgs=document.querySelectorAll(".banner_img img");
	// let pagers=document.querySelectorAll(".dian div");
	// let banner=document.querySelector("#banner");
	// const next=document.querySelector(".banner_rbtn");
	// const prev=document.querySelector(".banner_lbtn");
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	// const next=document.querySelector(".next");
	// const prev=document.querySelector(".prev");
	const next=document.querySelector(".banner_rbtn");
	const prev=document.querySelector(".banner_lbtn");
	console.log(next,prev);
	console.log(imgs);
	console.log(pagers);
	console.log(banner);
	pagers.forEach(function(ele,index){
		// console.log(index);
		ele.onclick=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this,ele,pagers[index]指向同一个
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;//n赋给当前点击的位置
		}
	});
	var n=0;
	t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);//清除setInterval
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	//点击下一个
	next.onclick=function(){
		move();
	}
	prev.onclick=function(){
		n-=2;
		move();
	}
}
	//闪购部分效果
{
	const prev=document.querySelector(".star_btn1");
	const next=document.querySelector(".star_btn2");
	const part=document.querySelector(".star_bottom");

	let n=0;//代表向左移动几屏

	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		part.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		part.style.marginLeft=-992*n+"px";
	}
}

