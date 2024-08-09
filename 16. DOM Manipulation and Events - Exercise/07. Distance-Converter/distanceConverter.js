function attachEventsListeners() {
    const inputNumber = document.getElementById('inputDistance');
    const inputSelect = document.getElementById('inputUnits');

    const outputResult = document.getElementById('outputDistance');
    const outputSelect = document.getElementById('outputUnits');

    const buttonEl = document.querySelector('input[value=Convert]');

    function convertFromMeters(meters, outputUnit) {
        switch (outputUnit) {
            case 'km':
                return meters / 1000;
                break;
            case 'm':
                return meters / 1;
                break;
            case 'cm':
                return meters / 0.01;
                break;
            case 'mm':
                return meters / 0.001;
                break;
            case 'mi':
                return meters / 1609.34;
                break;
            case 'yrd':
                return meters / 0.9144;
                break;
            case 'ft':
                return meters / 0.3048;
                break;
            case 'in':
                return meters / 0.0254;
                break;
        }
    }

    buttonEl.addEventListener('click', () => {
        let distance = Number(inputNumber.value);
        let inputUnit = inputSelect.value;
        let outputUnit = outputSelect.value;

        if (inputUnit === 'km') {
            let meters = distance * 1000;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'm') {
            let meters = distance * 1;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'cm') {
            let meters = distance * 0.01;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'mm') {
            let meters = distance * 0.001;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'mi') {
            let meters = distance * 1609.34;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'yrd') {
            let meters = distance * 0.9144;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'ft') {
            let meters = distance * 0.3048;
            outputResult.value = convertFromMeters(meters, outputUnit);
        } else if (inputUnit === 'in') {
            let meters = distance * 0.0254;
            outputResult.value = convertFromMeters(meters, outputUnit);
        }
    });
}
