console.log("Ano novo está chegando!!!");

let nome = "Mariah Carey";

let idade = 54;

let ano = 2023;

const anoNascimento = ano - idade;

console.log(anoNascimento);

let quartaFeira = true;

console.log(quartaFeira);

console.log(typeof quartaFeira);

let _idade = 15;

if (_idade >= 18) {
	console.log("Você é maior de idade podera curtir o show");
} else {
	console.log("Sinto muito, vai ter que assistir na Globo");
}

let niver = "Batata";

// Operador OU (or)
//  ||

if (niver == "Junho" || niver == "Agosto" || niver == "Dezembro") {
	console.log("Uma ou mais opções estão corretas");
} else {
	console.log(`Algo de errado não está certo, o mês digitado foi ${niver}`);
}
