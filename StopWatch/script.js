let startTime = 0, elapsedTime = 0, intervalId;
let isRunning = false;
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

// Function to format time into hh:mm:ss
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to update the display
function updateDisplay() {
    const currentTime = Date.now();
    const diff = currentTime - startTime + elapsedTime;
    display.textContent = formatTime(diff);
}

// Start/Stop button functionality
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
        startStopBtn.textContent = 'Start';
    } else {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 1000);
        startStopBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    laps.innerHTML = ''; // Clear laps
});

// Lap button functionality
lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const currentLapTime = display.textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.children.length + 1}: ${currentLapTime}`;
        laps.appendChild(lapItem);
    }
});
