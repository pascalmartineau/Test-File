const chooserBtn = document.getElementById('chooserBtn');
const resultDiv = document.getElementById('result');

const choices = [
    { name: 'Courtney', emoji: '🍕' },
    { name: 'Sophia', emoji: '🍝' }
];

chooserBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const selectedChoice = choices[randomIndex];
    
    // Remove existing classes
    resultDiv.classList.remove('courtney', 'sophia');
    
    // Add the appropriate class for styling
    if (randomIndex === 0) {
        resultDiv.classList.add('courtney');
    } else {
        resultDiv.classList.add('sophia');
    }
    
    // Display the result with emoji and name
    resultDiv.innerHTML = `<div style="font-size: 2.5em; margin-bottom: 15px;">${selectedChoice.emoji}</div>${selectedChoice.name}`;
    
    // Add animation class
    resultDiv.classList.add('show');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 600);
});
