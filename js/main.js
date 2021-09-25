let elemets = document.querySelectorAll('.btn_normas');
let info = document.querySelectorAll('.info');
let btn_irnormas = document.querySelector('.btn_irnormas');

const arr = Array.from(elemets);
const arrinfo = Array.from(info);

function posInfo(e){
	let pos = arr.indexOf(e);
	const info = arrinfo[pos];
	const pos_info = info.offsetTop;
	return pos_info;
}

btn_irnormas.addEventListener('click', () => {
	const posFirstInfo = arrinfo[0];
	
	window.scroll({
		top: posFirstInfo.offsetTop - 85,
		behavior: 'smooth'
	});	
	
});

arr.forEach(e => {
	e.addEventListener('click', () => {
		let pos_info = posInfo(e);
		window.scroll({
			top: pos_info - 85,
			behavior: 'smooth'
		});			
	});
});
