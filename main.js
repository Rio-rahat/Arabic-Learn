// Optimize performance by lazy loading audio and reducing unnecessary rendering
const arabicLetters = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'];

const letterAudioMap = {};

// Function to create the Arabic letter divs
function createLetterDivs() {
    const container = document.querySelector('.container');
    
    arabicLetters.forEach(letter => {
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        letterDiv.textContent = letter;

        // Lazy load audio on first click
        letterDiv.addEventListener('click', () => {
            if (!letterAudioMap[letter]) {
                const audioElement = new Audio(`audio/${letter}.mp3`);
                letterAudioMap[letter] = audioElement;
            }
            playLetterSound(letter);
        });

        letterDiv.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent context menu

        container.appendChild(letterDiv);
    });
}

function playLetterSound(letter) {
    const audioElement = letterAudioMap[letter];
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.play();
    }
}

// Initialize the website
createLetterDivs();
