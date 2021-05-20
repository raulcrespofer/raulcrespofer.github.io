function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
		if(i == 2){
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='amarillo'>" + libros[i].textContent + "</p>"
		}
}



	loadDocA("libros.xml","xml");

