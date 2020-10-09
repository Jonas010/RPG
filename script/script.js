// classes
let wizard = document.querySelector('#mago');
let archer = document.querySelector('#arqueiro');
let warrior = document.querySelector('#guerreiro');

//o texto da info

const main = document.querySelector('#info');
let nome_class = document.querySelector('h2');
let info = document.querySelector('#text');

function check() {
	if (wizard.checked == true) {
		console.log("wizard checked");
		main.style.display = "block";
		nome_class.innerHTML = "mago";
		info.innerHTML = "O mago é uma boa classe para quem não curte ataque a curta distância."
	}
	if (archer.checked == true) {
		console.log("archer checked");
		main.style.display = "block";
		nome_class.innerHTML = "arqueiro";
		info.innerHTML = "o arqueiro é uma classe que pode agir tanto com ataque a longa distância quanto a curta."
	}
	if (warrior.checked == true) {
		console.log("warrior checked");
		main.style.display = "block";
		nome_class.innerHTML = "guerreiro";
		info.innerHTML = "o guerreiro é vida loka,ele vai pra cima e pronto."
	}
}

//a parte do código meia-boca

let form = document.querySelector('form');
var input = document.querySelector('#name');

form.addEventListener('submit', (e)=> {

	//quando diferente de nulo,o if que vai funcionar
	if (input.value != "") {
		alert("bom jogo");
	}

	//quando estiver nulo,o else que vai funcionar
	else {
		alert("por favor,escreva algo ou marque uma das opções de classe.");
		e.preventDefault();
	};
});