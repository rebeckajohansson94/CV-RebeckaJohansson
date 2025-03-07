/* Modal Pop-up from https://codepen.io/CreatEve-Sparks/pen/yyBRQbN */

const open = document.getElementById("open_modal_button");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_modal_button");

open_modal_button.addEventListener("click", () => {
    modal_container.classList.add("show");
});

close_modal_button.addEventListener("click", () => {
    modal_container.classList.remove("show");
});
