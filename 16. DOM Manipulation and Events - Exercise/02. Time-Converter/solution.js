function attachEventsListeners() {
    const buttonEls = document.querySelectorAll('input[type="button"]');
    
    [...buttonEls].forEach(b => {
        b.addEventListener('click', (e) => {
            if (e.currentTarget.previousSibling.previousSibling.id === 'days') {
                let days = Number(e.currentTarget.previousSibling.previousSibling.value);
                
                const hoursEl = document.getElementById('hours');
                const minutesEl = document.getElementById('minutes');
                const secondsEl = document.getElementById('seconds');

                hoursEl.value = days * 24;
                minutesEl.value = days * 24 * 60;
                secondsEl.value = days * 24 * 60 * 60;
            }
            else if (e.currentTarget.previousSibling.previousSibling.id === 'hours') {
                let hours = Number(e.currentTarget.previousSibling.previousSibling.value);
                
                const daysEl = document.getElementById('days');
                const minutesEl = document.getElementById('minutes');
                const secondsEl = document.getElementById('seconds');

                daysEl.value = hours / 24;
                minutesEl.value = hours * 60;
                secondsEl.value = hours * 60 * 60;
            }
            else if (e.currentTarget.previousSibling.previousSibling.id === 'minutes') {
                let minutes = Number(e.currentTarget.previousSibling.previousSibling.value);
                
                const daysEl = document.getElementById('days');
                const hoursEl = document.getElementById('hours');
                const secondsEl = document.getElementById('seconds');

                daysEl.value = minutes / 60 / 24;
                hoursEl.value = minutes / 60;
                secondsEl.value = minutes * 60;
            }
            else if (e.currentTarget.previousSibling.previousSibling.id === 'seconds') {
                let seconds = Number(e.currentTarget.previousSibling.previousSibling.value);
                
                const daysEl = document.getElementById('days');
                const hoursEl = document.getElementById('hours');
                const minutesEl = document.getElementById('minutes');

                daysEl.value = seconds / 60 / 60 / 24;
                hoursEl.value = seconds / 60 / 60;
                minutesEl.value = seconds / 60;
            }
        });
    });
}