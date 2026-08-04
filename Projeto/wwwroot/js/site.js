document.addEventListener('DOMContentLoaded', function () {
    const item = document.querySelector('.menu-feminina-item');
    const botao = document.querySelector('.menu-feminina-botao');
    if (!item || !botao) return;

    function fechar() {
        item.classList.remove('submenu-aberto');
        botao.setAttribute('aria-expanded', 'false');
    }

    botao.addEventListener('click', function (event) {
        event.stopPropagation();
        const abriu = item.classList.toggle('submenu-aberto');
        botao.setAttribute('aria-expanded', abriu ? 'true' : 'false');
    });

    document.addEventListener('click', function (event) {
        if (!item.contains(event.target)) fechar();
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') fechar();
    });
});

/* SUBMENU MASCULINA — cole no final de wwwroot/js/site.js */
document.addEventListener("DOMContentLoaded", function () {
    const item = document.querySelector(".menu-masculina-item");
    const botao = document.querySelector(".menu-masculina-botao");
    if (!item || !botao) return;

    function fechar() {
        item.classList.remove("submenu-aberto");
        botao.setAttribute("aria-expanded", "false");
    }

    botao.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        const abriu = item.classList.toggle("submenu-aberto");
        botao.setAttribute("aria-expanded", abriu ? "true" : "false");

        const feminina = document.querySelector(".menu-feminina-item");
        const botaoFeminina = document.querySelector(".menu-feminina-botao");
        if (feminina) feminina.classList.remove("submenu-aberto");
        if (botaoFeminina) botaoFeminina.setAttribute("aria-expanded", "false");
    });

    item.addEventListener("click", function (event) { event.stopPropagation(); });
    document.addEventListener("click", fechar);
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") fechar();
    });
});
