const counterValue = document.querySelector('value');

const decrementBtn = document.querySelector(".decrement");
decrementBtn.addEventListener("click", handleClick)
const handleClick = () => {
    counterValue -= 1;
};



const incrementBtn = document.querySelector(".increment");
incrementBtn.addEventListener("click", handleClickUp)
const handleClickUp = () => {
    counterValue += 1;
};
