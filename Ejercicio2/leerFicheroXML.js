function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let mensajes = xmlDoc.querySelectorAll("mensaje")
	let conversacion = xmlDoc.querySelector("conversacion")
	for(let i=0; i<mensajes.length; i++){
		
		capaVacia.innerHTML = capaVacia.innerHTML + "<main>" + conversacion[i].textContent + "</main>"

			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='verde'>" + mensajes[i].textContent + "</p>"

			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='azul'>" + mensajes[i].textContent + "</p>"
	
}
}


	loadDocA("mensajes.xml","xml");

