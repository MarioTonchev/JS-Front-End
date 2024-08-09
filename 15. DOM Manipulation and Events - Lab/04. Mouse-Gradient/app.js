function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', function(e) {
        let mouseClickPosition = e.offsetX;
        let width = e.currentTarget.clientWidth;
        
        let percentage = Math.floor((mouseClickPosition / width) * 100);

        console.log(percentage);

        result.textContent = percentage + '%';
    });
}