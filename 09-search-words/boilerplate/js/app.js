//! variables
const searchBtn = document.querySelector('#searchBtn');
const resetBtn = document.querySelector('#resetBtn');
const input = document.querySelector('#input');
const content = document.querySelector('.content p');

/* 
// strings sao case sensitive
const string1 = 'Javascript';
const string2 = 'javascript';
console.log(string1 === string2 ? true : false); 
*/

//! functions

//? pretendo introduzir um valor no input e verificar se esse valor corresponde ao texto do paragrafo

const handleSearchInclude = () => {
	const searchValue = input.value.trim();

	if (searchValue === '') {
		alert('Por favor, insira um termo para buscar...');
		return;
	}

	const textOriginal = content.textContent;

	const isSubstringPresent = textOriginal.includes(searchValue);

	console.log(searchValue, textOriginal, isSubstringPresent);

	if (isSubstringPresent) {
		content.innerHTML = textOriginal.split(searchValue).join(`<mark>${searchValue}</mark>`);
		/*  content.innerHTML = textOriginal.replace(searchValue, `<mark>${searchValue}</mark>`); */

		console.log(textOriginal, searchValue);
	} else {
		alert('Nehuma correspondência encontrada.');
		input.value = '';
	}
};

//! using REGEXP

const handleSearchRegex = () => {
	const searchValue = input.value.trim();

	if (searchValue === '') {
		alert('Por favor, insira um termo para buscar...');
		return;
	}

	const regExp = new RegExp(searchValue, 'gi');
	console.log(regExp);

	const matches = content.textContent.match(regExp);

	console.log(matches);

	if (matches) {
		content.innerHTML = content.textContent.replace(regExp, `<mark>$&</mark>`);
	} else {
		alert('Nehuma correspondência encontrada.');
		input.value = '';
	}
};

const handleReset = () => {
	content.innerHTML = content.textContent;
	input.value = '';
};

//! event Listeners

searchBtn.addEventListener('click', handleSearchInclude);
/* searchBtn.addEventListener('click', handleSearchRegex); */
resetBtn.addEventListener('click', handleReset);
