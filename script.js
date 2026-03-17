const blocos = document.querySelectorAll(".bloco");
const h2s = document.querySelectorAll("h2");
const ps = document.querySelectorAll("p");

const lista = [
    { id: "1# Three Column Preview", txt: "Cartão de visualização de três colunas", link: "/01-Three-column-preview-card-component-main/index.html" },
    { id: "2# NFT Preview", txt: "Cartão de visualização NFT", link: "/02-NFT-preview-card-component-solution/index.html" },
    { id: "3# Order Summary", txt: "Cartão de resumo do pedido", link: "/03-Order-summary-card-solution/index.html" },
    { id: "4# Profile Card", txt: "Cartão de perfil", link: "/04-Profile-card-component-solution/index.html" },
    { id: "5# Results Summary", txt: "Resumo dos resultados", link: "/05-Results-summary-component-solution/index.html" },
    { id: "6# Social Proof", txt: "Prova Social", link: "/06-Social-proof-section-solution/index.html" },
    { id: "7# Four Card", txt: "Quatro Cartões", link: "/07-Four-card-feature-section-solution/index.html" },
    { id: "8# Stats Preview", txt: "Cartão de visualização de estatísticas", link: "/08-Stats-preview-card-component-solution/index.html" },
    { id: "9# Single Price Grid", txt: "Grade de preço único", link: "/09-Single-price-grid-component-solution/index.html" },
    { id: "10# QR Code", txt: "Código QR", link: "/10-QR-code-component-solution/index.html" },
    { id: "11# Product Preview", txt: "Cartão de visualização do produto", link: "/11-Product-preview-card-component-solution/index.html" }
];

h2s.forEach((h2, i) => {
    if (lista[i])
        h2.textContent = `${lista[i].id}`;
});

ps.forEach((p, i) => {
    if (lista[i]) {
        p.textContent = `${lista[i].txt}`;
    }
});

function click(link) {
    window.open(`${link}`, "_blank");
}

blocos.forEach((bloco, i) => {
    bloco.addEventListener("click", () => {
        if (lista[i]) {
            click(lista[i].link);
        }
    });
});

