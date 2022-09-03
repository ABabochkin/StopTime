const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

///

const startButtom = document.querySelector(`.start`);
const pauseButtom = document.querySelector(`.pause`);
const stopButtom = document.querySelector(`.stop`);

//

startButtom.addEventListener(`click`, () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
});

pauseButtom.addEventListener('click', () => {
    clearInterval(interval)
});

stopButtom.addEventListener('click', () => {
    clearInterval(interval);
    hour = 00;
    minute = 00;
    second = 00;
    millisecond = 00;
    hourElement.textContent = "00";
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    millisecondElement.textContent = "00"
    
})

///

let hour = 00;
let minute = 00;
let second = 00;
let millisecond = 00;
let interval;

function startTimer () {
    millisecond++;

    // milliseconds
    if (millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond;
    }

    if (millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }


    if (millisecond > 99) {
        second++;
        secondElement.innerText = "0" + second;
        millisecond = 0;
        millisecondElement.innerText = "0" + millisecond;
    }
    // seconds
    if (second > 9){
        secondElement.innerText = second;
    }

    if (second > 59) {
        minute++;
        minuteElement.innerText = "0" + minute;
        second = 0;
        secondElement.innerText = "0" + second;
        
    }
s
}

