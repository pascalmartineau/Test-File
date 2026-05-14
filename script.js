const chooserBtn = document.getElementById('chooserBtn');
const resultDiv = document.getElementById('result');

const choices = ['Courtney', 'Sophia'];

chooserBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const selectedChoice = choices[randomIndex];
    
    resultDiv.textContent = selectedChoice;
});
