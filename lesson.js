const hero = document.querySelector('.img3');
const slider = document.querySelectorAll('.img2');
const glide = document.querySelectorAll('figure img');
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelectorAll('.dropdown');
const menu = document.querySelector('.nav1-div2');
const slides=document.querySelector(".all-news").children;



const tl= new TimelineMax();
overall();


function overall(){

		tl.fromTo(hero, 2, {width:"0%"}, {visibility:"visible", width:"100%", ease:Power2.easeInOut})
		.fromTo(slider, 2, {width:"0%"}, {visibility:"visible", width:"100%", ease:Power2.easeInOut}, "-=2");
}



hamburger.onclick = function myfunction(){
	menu.classList.toggle('togglecls');
	tl.fromTo(menu,0.5,{x:"-300px"},{x:"0px",width:"50%"});
}

function active(){
	for(let i=0;i<slides.length;i++){
		slides[i].onclick=function clickslide(){
			for(let index=0;index<slides.length;index++){
				slides[index].classList.remove("active");
			}
			slides[i].classList.add("active");
			if(i==1){
				document.s2img1.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/9.jpg";
				document.s2img2.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/8.jpg";
			}
			else if(i==2){
				document.s2img1.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/7.jpg";
				document.s2img2.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/6.jpg";
			}
			else if(i==3){
				document.s2img1.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/5.jpg";
				document.s2img2.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/4.jpg";
			}
			else{
				document.s2img1.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/14.jpg";
				document.s2img2.src="file:///C:/Users/mlg29.LAWAL/Desktop/javascript30/newsbox/img/bg-img/15.jpg";
			}
		}
	}
}
active();




