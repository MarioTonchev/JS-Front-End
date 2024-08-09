function solve() {
  const sentences = document.getElementById('input').value.split('.').filter(Boolean);
  const output = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
     let sentencesToAdd = sentences.slice(i, i + 3).join('.').concat('.');

     let p = document.createElement('p');
     p.textContent = sentencesToAdd;

     output.appendChild(p);
  }
}