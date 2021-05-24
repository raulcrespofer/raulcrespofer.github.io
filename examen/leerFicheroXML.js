function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let animales = xmlDoc.querySelectorAll("animales")
	for(let i=0; i<animales.length; i++){
		if(i == 1){
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='fondo2'>" + animales[i].textContent + "</p>"
		}
		else{
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='fondo1'>" + animales[i].textContent + "</p>"
		}
}
}

	loadDocA("animales.xml","xml");
