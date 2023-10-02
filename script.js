const button = document.querySelectorAll('button');
const display = document.querySelector('.screen');

function calc(button) {
    if (button.id === 'equal') {
        display.textContent = eval(display.textContent);
    }
    else if (button.id === 'clear') {
        display.textContent = '';
    }
    else if (button.id === 'delete') {
        display.textContent = display.textContent.slice(0, -1);
    }
    else {
        if (display.textContent.length < 20) {
            display.textContent += button.textContent;
        }
    }
}

button.forEach(button => button.addEventListener('click', () => calc(button)))
