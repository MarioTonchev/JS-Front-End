function extract(id) {
    debugger;
    const pElement = document.getElementById(id);

    const pattern = /\(([^()]+)\)/g;

    const matches = pElement.textContent.matchAll(pattern);
    const result = Array.from(matches).map(match => match[1]);
    
    return result.join('; ');
}