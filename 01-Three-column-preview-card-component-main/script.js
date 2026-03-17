const coder = document.getElementById("coder");
const desafio = document.getElementById("desafio");

function click(link) {
    window.open(link, "_blank");
}

desafio.addEventListener("click", () => {
    click("https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-");
});

coder.addEventListener("click", () => {
    click("https://www.frontendmentor.io/profile/patejo-coder");
});

