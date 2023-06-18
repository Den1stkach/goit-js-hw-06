const counterValueEl = document.querySelector('#value');
let counter = 0
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let handleClick = () => {
     counter -= 1
};

decrementBtn.addEventListener('click', handleClick)

const incrementBtn = document.querySelector('button[data-action="increment"]');

let handleClickUp = () => {
    counter += 1
};

incrementBtn.addEventListener('click', handleClickUp)
counterValueEl.textContent = counter