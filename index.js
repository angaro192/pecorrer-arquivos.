const fs = require('fs');

function listarArquivos(diretorio, arquivos) {
	if (!arquivos)
		arquivos = [];

	let listaDeArquivos = fs.readdirSync(diretorio);
	for (let k in listaDeArquivos) {
		let stat = fs.statSync(diretorio + '/' + listaDeArquivos[k]);
		arquivos.push(diretorio + '/' + listaDeArquivos[k])
		if (stat.isDirectory()) {
			listarArquivos(diretorio + '/' + listaDeArquivos[k], arquivos);
		}
	}
	return arquivos;
}

let lista = listarArquivos('./arquivos');
console.log(lista);