//! variables
const postsContainer = document.querySelector('.post__wrapper');
const limitChars = 150;

//! functions

// fazer fetch dos dados do json e mostrar no interface

// buscar a data
const fetchPosts = async () => {
	try {
		const response = await fetch('data/posts.json');
		const data = await response.json();
		console.log(data);
		renderPosts(data);
	} catch (error) {
		console.log(error);
	}
};

// atualizar o UI
const renderPosts = array => {
	array.forEach(item => {
		const displayText = item.text.slice(0, limitChars);
		const moreText = item.text.slice(limitChars);

		const postHTML = `
    <article class="post">
		<h2>${item.title}</h2>
			<p class="content">
			${displayText}<span class="dots">...</span><span class="more hide">${moreText}</span>
			</p>
			<button>Read More</button>
	</article>`;

		postsContainer.innerHTML += postHTML;
	});
};

// funcionalidade para os botoes
const handleReadMore = event => {
	if (event.target.tagName === 'BUTTON') {
		const post = event.target.parentElement;

		post.querySelector('.dots').classList.toggle('hide');
		post.querySelector('.more').classList.toggle('hide');

		event.target.textContent = event.target.textContent === 'Read More' ? 'Read Less' : 'Read More';
	}
};

// event delegation criar a funcionalidade dos butoes

//! event listeners
/* fetchPosts(); */
document.addEventListener('DOMContentLoaded', fetchPosts);

// event delegation
postsContainer.addEventListener('click', handleReadMore);
