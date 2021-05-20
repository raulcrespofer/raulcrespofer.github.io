function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let primero = xmlDoc.querySelectorAll("primero")
	let segundo = xmlDoc.querySelectorAll("segundo")
	let conversacion = xmlDoc.querySelector("conversacion")
	capaVacia.innerHTML = capaVacia.innerHTML + "<main class='conversacion'>" + "</main>"
	for(let i=0; i<primero.length&&derecha.length; i++){
		
		capaVacia.innerHTML = capaVacia.innerHTML + "<main class='conversacion'>" + "</main>"

			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='verde'>" + mensajes[i].textContent + "</p>"

			capaVacia.innerHTML = capaVacia.innerHTML + "<p class='azul'>" + mensajes[i].textContent + "</p>"
	
}
	}


	loadDocA("mensajes.xml","xml");

