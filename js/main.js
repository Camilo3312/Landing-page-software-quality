let elemets = document.querySelectorAll('.btn_normas');
let info = document.querySelectorAll('.info');
let btn_irnormas = document.querySelector('.btn_irnormas');
let nombre = document.querySelector('.name');
let message = document.querySelector('.message');
let btn_comment = document.querySelector('.btn_comentario');

var messagesJson = JSON.stringify();
const arr = Array.from(elemets);
const arrinfo = Array.from(info);

// Messages

btn_comment.addEventListener('click', () => {
	let date = new Date();
	localStorage.setItem("Nombre",nombre.value);
	localStorage.setItem('Fecha', date);
	localStorage.setItem("Nombre",menssage.value);

	let peticion = localStorage.getItem("Nombre");
	console.log(peticion)
});

// Nav normas

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

