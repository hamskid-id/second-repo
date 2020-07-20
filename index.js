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

		tl.fromTo(hero, 2, {scaleY:"0"}, {visibility:"visible", scaleY:"1", ease:Power2.easeInOut})
		.fromTo(slider, 2, {scaleY:"0"}, {visibility:"visible", scaleY:"1", ease:Power2.easeInOut}, "-=2");
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
				document.s2img1.src="https://res.cloudinary.com/hamskid/image/upload/v1595201436/second-repo/24_ihlw39.JPG";
				document.s2img2.src="https://res.cloudinary.com/hamskid/image/upload/v1595201442/second-repo/22_oidvgl.JPG";
			}
			else if(i==2){
				document.s2img1.src="https://res.cloudinary.com/hamskid/image/upload/v1595201433/second-repo/31_zcnk21.JPG";
				document.s2img2.src="https://res.cloudinary.com/hamskid/image/upload/v1595201418/second-repo/4_e7tcqr.JPG";
			}
			else if(i==3){
				document.s2img1.src="https://res.cloudinary.com/hamskid/image/upload/v1595201417/second-repo/5_y30tty.JPG";
				document.s2img2.src="https://res.cloudinary.com/hamskid/image/upload/v1595201419/second-repo/7_qyjgqs.JPG";
			}
			else{
				document.s2img1.src="https://res.cloudinary.com/hamskid/image/upload/v1595201430/second-repo/15_j2osix.JPG";
				document.s2img2.src="https://res.cloudinary.com/hamskid/image/upload/v1595201436/second-repo/24_ihlw39.JPG";
			}
		}
	}
}
active();




