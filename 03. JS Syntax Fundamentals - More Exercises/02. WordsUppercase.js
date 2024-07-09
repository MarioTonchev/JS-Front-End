function upperCase(string) {
    let newString = string.match(/\b[a-zA-Z0-9]+\b/g);
    
    newString = newString.map(word => word.toUpperCase());
    
    const result = newString.join(', ');
    
    console.log(result);
}

upperCase('Hi, how are you?');
