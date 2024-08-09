function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainDiv = document.getElementById('main');
    const profileDiv = document.querySelector('div.profile');

    mainDiv.removeChild(profileDiv);
    
    function showProfiles(profiles) {
        profiles.forEach(({_id, username, email, age}) => {
            const clonedProfile = profileDiv.cloneNode(true);

            const [usernameInput, emailInput, ageInput] = clonedProfile.querySelectorAll('input:not([type="radio"])');

            usernameInput.value = username;
            emailInput.value = email;
            ageInput.value = age;

            const [lockedInput, unlockedInput] = clonedProfile.querySelectorAll('input[type="radio"]');
            lockedInput.name = _id;
            unlockedInput.name = _id;

            const hiddenDiv = clonedProfile.querySelector('.user1Username');
            hiddenDiv.hidden = true;

            const buttonEl = clonedProfile.querySelector('button');
            buttonEl.addEventListener('click', (e) => hideInfo(e, clonedProfile));

            mainDiv.appendChild(clonedProfile);
        });
    }

    function hideInfo(e, profile) {
        const button = e.currentTarget;
        const hiddenDiv = profile.querySelector('.user1Username');
        const lockInput = profile.querySelector('input[value="lock"]');

        if (lockInput.checked) {
            return;
        }

        if (button.textContent === 'Show more') {
            hiddenDiv.hidden = false;
            button.textContent = 'Hide it';
        } 
        else {
            hiddenDiv.hidden = true;
            button.textContent = 'Show more';
        }
    }

    fetch(BASE_URL)
    .then(r => r.json())
    .then(r => showProfiles(Object.values(r)));
}