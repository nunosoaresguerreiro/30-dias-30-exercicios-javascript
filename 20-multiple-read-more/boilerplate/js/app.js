//! variables
const limitChars = 150;
const contents = document.querySelectorAll('.content');
const readMoreButtons = document.querySelectorAll('button');

//! functions

// preciso de iniciar a minha aplicacao com parte do texto oculto

const renderPosts = () => {
	contents.forEach(txt => {
		const displayText = txt.textContent.slice(0, limitChars);
		const moreText = txt.textContent.slice(limitChars);

		txt.innerHTML = `${displayText}<span class="dots">...</span><span class="more hide">${moreText}</span>`;
	});
};

// clikar no botao e fazer aparecer o restante texto

//! event listeners
readMoreButtons.forEach(btn => {
	btn.addEventListener('click', event => {
		const post = event.target.parentElement;

		post.querySelector('.dots').classList.toggle('hide');
		post.querySelector('.more').classList.toggle('hide');

		event.target.textContent = event.target.textContent === 'Read More' ? 'Read Less' : 'Read More';
	});
});

document.addEventListener('DOMContentLoaded', renderPosts);
