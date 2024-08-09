function solution() {
    const getArticlesURL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const getArticleDetailsURL = 'http://localhost:3030/jsonstore/advanced/articles/details';

    const mainSection = document.getElementById('main');

    function displayArticles(articles) {
        articles.forEach(({_id, title}) => {
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordion');

            const headDiv = document.createElement('div');
            headDiv.classList.add('head');

            const spanTitle = document.createElement('span');
            spanTitle.textContent = title;

            const showButton = document.createElement('button');
            showButton.classList.add('button');
            showButton.setAttribute('id', _id);
            showButton.textContent = 'More';

            headDiv.append(spanTitle, showButton);

            const hiddenDiv = document.createElement('div');
            hiddenDiv.classList.add('extra');

            const hiddenParagraph = document.createElement('p');            
            hiddenDiv.appendChild(hiddenParagraph);

            accordionDiv.append(headDiv, hiddenDiv);

            mainSection.appendChild(accordionDiv);

            showButton.addEventListener('click', (e) => showHiddenInfo(e, accordionDiv));
        });
    }

    function showHiddenInfo(e, accordionDiv) {
        const showButton = e.currentTarget;       
        const hiddenDiv = accordionDiv.querySelector('div.extra');      
        const hiddenParagraph = hiddenDiv.querySelector('p');

        if (showButton.textContent === 'More') {
            showButton.textContent = 'Less';

            fetch(`${getArticleDetailsURL}/${showButton.id}`)
            .then(r => r.json())
            .then(r => {
                let {content} = r;
                              
                hiddenDiv.style.display = 'block';
                hiddenParagraph.textContent = content;
            });
        }
        else {
            showButton.textContent = 'More';
            hiddenDiv.style.display = 'none';
        }
    }

    fetch(getArticlesURL)
    .then(r => r.json())
    .then(r => displayArticles(r));
}

solution();