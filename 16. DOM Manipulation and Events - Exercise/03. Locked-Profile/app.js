function lockedProfile() {
    const profileEls = document.querySelectorAll('div.profile');

    [...profileEls].forEach(profile => {
        const buttonEl = profile.querySelector('button');

        buttonEl.addEventListener('click', (e) => {
            const parentDiv = e.currentTarget.parentElement;
            if (!parentDiv.querySelector('input[value="unlock"]').checked) {
                console.log('asd');
                return;
            }

            const hiddenInfoDiv = parentDiv.querySelector('div');

            if (buttonEl.textContent === 'Show more') {
                hiddenInfoDiv.style.display = 'block';
                e.currentTarget.textContent = 'Hide it';       
            }
            else {
                hiddenInfoDiv.style.display = 'none';
                e.currentTarget.textContent = 'Show more';  
            }
        });
    });
}