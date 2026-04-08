console.log(document.getElementById("titulo"));

const sections = document.querySelectorAll("section");

function mostrarSections() {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("load", () => {
    mostrarSections();
    digitar();
});

window.addEventListener("scroll", mostrarSections);

// TEXTO DIGITANDO
const texto = "Bullying não é brincadeira.";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("titulo").innerHTML =
            texto.substring(0, i + 1) + "<span>|</span>";
        i++;
        setTimeout(digitar, 80);
    }
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});