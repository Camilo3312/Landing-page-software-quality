$(document).ready(function(){

    $('.btn_normas').click(function(){
        var pos = $('.iso').position();
        console.log(pos.top)
		$('body, html').animate({
			scrollTop: pos.top 
		}, 200);
	});
	
	$('.btn_iso').click(function(){
        var pos = $('.iso').position();
        console.log(pos.top)
		$('body, html').animate({
			scrollTop: pos.top 
		}, 200);
	});
	
	$('.btn_spice').click(function(){
        var pos = $('.spice').position();
        console.log(pos.top)
		$('body, html').animate({
			scrollTop: pos.top 
		}, 200);
	});
	
	$('.btn_cmmi').click(function(){
        var pos = $('.cmmi').position();
        console.log(pos.top)
		$('body, html').animate({
			scrollTop: pos.top 
		}, 200);
	});
	
	$('.btn_psp').click(function(){
        var pos = $('.psp').position();
        console.log(pos.top)
		$('body, html').animate({
			scrollTop: pos.top 
		}, 200);
	});
	
	
});

// let btn_normas = document.querySelector('.btn_normas');
// let estandares = document.querySelector('.estandares');

// let coords = estandares.getBoundingClientRect();

// console.log(coords.top);

// btn_normas.addEventListener('click', ()=> {
//     window.scrollTo({
//         top: coords.top
//     });
// });

// let normas = document.querySelector('.normas');
// const pos = document.documentElement.getBoundingClientRect();
// const pos_normas = normas.getBoundingClientRect();

// let pos = normas.offsetTop;

// let center = document.documentElement.getBoundingClientRect();

// console.log(pos, center.top / -1);

// while (center.top / -1 >= pos){
//     normas.style.display ="none";
// }
// while(pos.x >= pos_normas.x) {
//     normas.styles.background ='red';
//     console.log('asfasf')
// }