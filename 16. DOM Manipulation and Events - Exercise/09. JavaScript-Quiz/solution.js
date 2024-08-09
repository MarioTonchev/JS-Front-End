function solve() {
  const sections = document.querySelectorAll('section');
  const liEls = document.querySelectorAll('.quiz-answer');  
  const ulResultEl = document.getElementById('results');

  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let currentSection = 0;
  let correctGuesses = 0;

  [...liEls].forEach(li => {
      li.addEventListener('click', (e) => {        
      let answer = e.currentTarget.querySelector('div p').textContent;

      if (answer === correctAnswers[currentSection]) {
        correctGuesses++;
      }

      currentSection++;

      currentSection < 3 ? sections[currentSection].style.display = 'block' : '';
      sections[currentSection - 1].style.display = 'none';

      if (currentSection === 3) {
        const h1Result = ulResultEl.querySelector('li h1');
        ulResultEl.style.display = 'block';

        if (correctGuesses === 3) {
          h1Result.textContent = 'You are recognized as top JavaScript fan!';
        }
        else {
          h1Result.textContent = `You have ${correctGuesses} right answers`;
        }
      }
    });
  })
}
