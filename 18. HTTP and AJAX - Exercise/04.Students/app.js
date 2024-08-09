function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  const submitButton = document.getElementById('submit');
  const tBody = document.querySelector('table tbody');

  const [firstNameInput, lastNameInput, facultyNumberInput, gradeInput] = document.querySelectorAll('div.inputs input');

  function createStudentHandler() {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let facultyNumber = facultyNumberInput.value;
    let grade = gradeInput.value;
   
    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';  
    gradeInput.value = '';

    if (!firstName || !lastName || !facultyNumber || !grade) {
      return;
    }

    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        facultyNumber,
        grade
      })
    })
    .then(() => appendStudents());
  }

  function appendStudents() {
    tBody.innerHTML = '';

    fetch(BASE_URL)
    .then(r => r.json())
    .then(r => {
      Object.values(r).forEach(({firstName, lastName, facultyNumber, grade}) => {
        const tr = document.createElement('tr');

        const firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstName;

        const lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastName;

        const facultyNumberTd = document.createElement('td');
        facultyNumberTd.textContent = facultyNumber;

        const gradeTd = document.createElement('td');
        gradeTd.textContent = grade;

        tr.append(firstNameTd, lastNameTd, facultyNumberTd, gradeTd);

        tBody.append(tr);
      });
    });
  }

  submitButton.addEventListener('click', createStudentHandler);
  appendStudents();
}

attachEvents();