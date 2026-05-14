const chooserBtn = document.getElementById('chooserBtn');
const resultDiv = document.getElementById('result');
const pizzaWheelContainer = document.getElementById('pizzaWheel');
const pizzaWheelSpinner = document.getElementById('pizzaWheelSpinner');

const choices = [
    { name: 'Courtney', emoji: '🍕' },
    { name: 'Sophia', emoji: '🍝' }
];

let isSpinning = false;

chooserBtn.addEventListener('click', () => {
    if (isSpinning) return;
    
    isSpinning = true;
    chooserBtn.disabled = true;
    resultDiv.innerHTML = '';
    pizzaWheelContainer.style.display = 'flex';
    
    // Random winner
    const randomIndex = Math.floor(Math.random() * 2);
    const selectedChoice = choices[randomIndex];
    
    // Calculate rotation - we want to land on a specific slice
    // Each slice is 60 degrees (360/6)
    // We'll spin multiple times and land on the selected slice
    const baseRotation = randomIndex * 60;
    const extraSpins = 5; // Number of full rotations
    const totalRotation = (extraSpins * 360) + baseRotation + 180; // 180 to center the slice at the pointer
    
    // Random duration between 3-4 seconds
    const duration = 3 + Math.random();
    
    // Remove previous animation
    pizzaWheelSpinner.style.animation = 'none';
    
    // Trigger reflow to restart animation
    void pizzaWheelSpinner.offsetWidth;
    
    // Apply new animation
    pizzaWheelSpinner.style.setProperty('--spin-amount', totalRotation);
    pizzaWheelSpinner.style.setProperty('--spin-duration', duration + 's');
    pizzaWheelSpinner.style.animation = `spin-wheel ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
    
    // Show result after spinning ends
    setTimeout(() => {
        pizzaWheelContainer.style.display = 'none';
        
        // Remove existing classes
        resultDiv.classList.remove('courtney', 'sophia', 'show');
        
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
        
        isSpinning = false;
        chooserBtn.disabled = false;
        
        // Remove animation class after animation completes
        setTimeout(() => {
            resultDiv.classList.remove('show');
        }, 600);
    }, duration * 1000);
});
