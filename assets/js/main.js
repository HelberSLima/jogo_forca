let wordList = ['casa', 'fígado','abacaxi', 'livro', 'pão', 'sapato', 'abóbora','cadeira', 'tomate', 'mouse', 'polícia','estômago','teclado', 'maçã', 'caneta', 'tesoura', 'camisa']; // lista fixa de palavras iniciais
const wordListKey = 'wordListJogoDaForca'; // altere para criar uma nova lista de palavras no localStorage

function atualizaWordList() {  // adiciona ou sicroniza a wordList no localStorage
	if(!localStorage.getItem(wordListKey)) {
		for(let i = 0; i < wordList.length; i++) {
			wordList[i] = wordList[i].toUpperCase();
		}
		localStorage.setItem(wordListKey, JSON.stringify(wordList));
	} else {
		wordList = JSON.parse(localStorage.getItem(wordListKey));
	}
}

atualizaWordList();


// melhoria no viewport mobile
function redimensionar() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
	redimensionar();
});

redimensionar();