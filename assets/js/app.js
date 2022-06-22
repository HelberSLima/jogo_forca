const teclado = document.querySelector('#container-teclado');
const containerWord = document.querySelector('#container-word');
const buttons = teclado.querySelectorAll('button');
const arrayDesenho = document.querySelectorAll('.array-desenho');
const containerWinLoss = document.querySelector('.container-WinLoss');
let mensagemWinLoss = document.querySelector('.mensagem-win-loss');
let containerSair = document.querySelector('.container-sair');
const botaoSair = document.querySelector('#btn_sair');
let digitados = [];
let numeroAleatorio;
let cacheNumber;
let palavraSorteada = palavraAleatoria();
let palavraSorteadaSemAcento = palavraSorteada.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
let letrasTabela;
let contadorDeErro = 0;
let contadorDeAcerto = 0;
let count = 0;

montarTabelaWord(palavraSorteada);

teclado.addEventListener('click', capturaDigitoTecladoVirtual);
document.addEventListener('keydown', capturaDigitoTeclado);
botaoSair.addEventListener('click', sair);

function capturaDigitoTeclado(){
	if(event.keyCode <= 90 && event.keyCode >= 65) {
		mostrarLetraDesenhoTabela(event.key.toUpperCase());
		addChar(event.key.toUpperCase());
		verificaBtnDigitado(event.key.toUpperCase());
	}
}

function capturaDigitoTecladoVirtual() {
	if(event.target.textContent !== 'SAIR' && event.target !== teclado) {
		mostrarLetraDesenhoTabela(event.target.textContent);
		addChar(event.target.textContent);
		event.target.classList.add('clicado');
	}
}

function addChar(char) {
	if(!digitados.includes(char) && char !== 'SAIR') {
		digitados.push(char);
	}
}

function verificaBtnDigitado(char) {
	for(let i = 0; i < buttons.length - 1; i++) {
		if(buttons[i].textContent === char) {
			buttons[i].classList.add('clicado');
		}
	}
}

function palavraAleatoria() {
	while(numeroAleatorio === cacheNumber) {
		numeroAleatorio = Math.floor(
			Math.random() * wordList.length
			);
	}
	cacheNumber = numeroAleatorio;
	return wordList[numeroAleatorio];
}

function montarTabelaWord(word) {
	for (var i = 0; i < word.length; i++) {
		let span = document.createElement('span');
		span.classList.add('letter');
		containerWord.appendChild(span);
	}
	letrasTabela = containerWord.querySelectorAll('span');
}

function limpaTabela() {
	containerWord.innerHTML	= '';
}

function mostrarLetraDesenhoTabela(char) {
	for(let i = 0; i < palavraSorteada.length; i++) {
		if(char === palavraSorteadaSemAcento[i]) {
			if(letrasTabela[i].textContent === '') {
				letrasTabela[i].textContent = palavraSorteada[i];
				count++;
				contadorDeAcerto++;
			}
		}
	}

	if(!digitados.includes(char)) {
		if(count === 0) {
			contadorDeErro++;
			arrayDesenho[contadorDeErro - 1].style.opacity = '1';
		}
	}
	count = 0;
	if(contadorDeAcerto === palavraSorteada.length) {
		containerWinLoss.style.display = "flex";
		mensagemWinLoss.classList.add('win')
		mensagemWinLoss.textContent = "Você venceu!";
	}
	if(contadorDeErro === arrayDesenho.length) {
		containerWinLoss.style.display = "flex";
		mensagemWinLoss.classList.add('loss')
		mensagemWinLoss.textContent = "Você perdeu!";
	}
}

function sair() {
	containerSair.style.display = "flex";
}

function continuar() {
	containerSair.style.display = "none";
}