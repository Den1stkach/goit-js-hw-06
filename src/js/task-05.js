const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

input.addEventListener("input", (event) => {
    span.textContent = !event.currentTarget.value;
    if (!event.currentTarget.value === "false") {
        return span.textContent = `Anonymous`;
    }
});