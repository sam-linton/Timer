const timeDisplay = document.getElementById('time-display');
const toggleButton = document.getElementById('toggle-button') ;
const resetButton = document.getElementById('reset-button');
let count = 0;
let running = false;
let timer;

showButtons();
showCount();

function showCount() {
    const tenths = count % 10;
    const seconds = (count - tenths) / 10;
    timeDisplay.innerHTML = `${seconds}.${tenths}`;
}

function showButtons() {
    let label = 'Stop';
    if (!running) {
        label = count > 0 ? 'Resume' : 'Start';
    }
    toggleButton.innerHTML = label;
    resetButton.disabled = running;

}

function toggleRun() {
    running = !running;
    if (running) {
        timer = setInterval(()=> {
            count++;
            showCount();
        }, 100)
    }
    else {
        clearInterval(timer);
    }
    showButtons();

}

function reset() {
    if (! running) {
        count = 0;
        showCount();
        showButtons();
    }
}