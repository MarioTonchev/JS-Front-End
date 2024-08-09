function solve() {
    const spanEl = document.querySelector('div#info span');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let currentStop = ''
    let nextStop = 'depot';

    function depart() {
        departButton.disabled = true;

        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
        .then(response => response.json())
        .then(response => {
            let {name, next} = response;
           
            currentStop = name;
            nextStop = next;

            spanEl.textContent = `Next stop ${currentStop}`;
        })
        .catch(() => {
            spanEl.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        });

        arriveButton.disabled = false;
    }

    async function arrive() {
        arriveButton.disabled = true;
       
        spanEl.textContent = `Arriving at ${currentStop}`;
       
        departButton.disabled = false;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
