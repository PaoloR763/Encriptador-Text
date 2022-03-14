function verificarTexto(texto) {
	var restriccion = /[^a-zñ\s]/g;
	if (restriccion.test(texto)) {
		alert("No se permiten mayúsculas, acentos ni caracteres especiales");
		return false;
	} else {
		return true;
	}
};