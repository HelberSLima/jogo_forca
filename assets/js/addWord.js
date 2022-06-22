const adicionarPalavra = document.querySelector('.btn-add-word');
const input = document.querySelector('.add-word');
const mensageOut = document.querySelector('#mensage-out');
let newWord;

atualizaWordList();

adicionarPalavra.addEventListener('click', function(event) {
	newWord = input.value.toUpperCase();
	verificaNovaPalavra(newWord);
}, false);



function adicionaPalavraLocalStorage(palavra) { // palavra -> palavra que vai ser adicionada
	wordList.push(palavra);
	localStorage.setItem(wordListKey, JSON.stringify(wordList));
}

function verificaNovaPalavra(palavra) {
	mensageOut.style.color = 'red';

	if(palavra.length <= 8 && palavra !== "") {
		if(wordList.includes(palavra)) {
			mensageOut.textContent = 'A palavra já existe!';
		} else {
			mensageOut.textContent = 'Palavra adicionada com sucesso!'
			mensageOut.style.color = 'green';
			adicionaPalavraLocalStorage(newWord); // Adiciona a palavra na lista
		}
	} else if(palavra === '') {
		mensageOut.textContent = 'Campo vazio!';
	} else {
		mensageOut.textContent = 'Máx de 8 letras ultrapassado!';
	}

	mensageOut.style.opacity = 1;
	setTimeout(function() {
		mensageOut.style.opacity = 0;
	}, 2000);

}