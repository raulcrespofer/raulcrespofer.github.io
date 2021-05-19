function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	let libreria = xmlDoc.querySelectorAll("libreria")
	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML +"<div>" + libreria[i].textContent + "<div>"
}


	loadDocA("libros.xml","xml");

