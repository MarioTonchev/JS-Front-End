function getInfo() {
    const inputEl = document.getElementById('stopId');
    const busStopId = Number(inputEl.value);

    const stopNameEl = document.getElementById('stopName');
    const busesEl = document.getElementById('buses');

    if ([...busesEl.children].length > 0) {
        [...busesEl.children].forEach(c => {
            busesEl.removeChild(c);
        });
    }
    
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
    .then(response => response.json())
    .then(response => {
        let {name, buses} = response;
        
        stopNameEl.textContent = name;

        Object.keys(buses).forEach(bus => {
            const li = document.createElement('li');

            li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;

            busesEl.appendChild(li);
        });

        inputEl.value = '';
    })
    .catch(() => {
        stopNameEl.textContent = 'Error';
        inputEl.value = '';
    });
}