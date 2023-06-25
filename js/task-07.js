const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
const valueEl = inputEl.value;

const textSize = () => {

    textEl.style.fontSize = `${inputEl.value}px`
}

inputEl.addEventListener('input', textSize);