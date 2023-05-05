let divForm = document.querySelector('#form');
divForm.style.display="none";

let sortearPiada = (piadas) => {
	var i = Math.floor(Math.random() * piadas.length);
	return piadas[i];
}; 
let monstarPiada = (piada) => {
	let h1 = document.createElement('h1');
	h1.innerHTML =piada.titulo;
	let p = document.createElement('p');
	p.innerHTML = piada.texto;
	divPiada=document.querySelector("#piada");
	divPiada.appendChild(h1);
	divPiada.appendChild(p);
}

let piadas = localStorage.getItem('piadas');
if(piadas){
	piadas= JSON.parse(piadas);
	let piada = sortearPiada(piadas);
	monstarPiada(piada);
}


let salvarPiada = (piada) => {
	let piadas = localStorage.getItem('piadas');

	if(piadas!=null){
		piadas= JSON.parse(piadas);
	}else{
		piadas = [];
	}
	piadas.push(piada);
	piadas=JSON.stringify(piadas);
	localStorage.setItem('piadas', piadas);
	
	alert("Piada salva!");
};

document.piada.onsubmit = () => {
	
	let piada = {
		titulo: document.piada.titulo.value,
		texto: document.piada.texto.value
	}
	salvarPiada(piada);

	document.piada.titulo.value.titulo.value="";
	document.piada.titulo.value.texto.value="";
	return false;
}

document.querySelector("button").onclick = () => {
	divForm.style.display="flex";
}

