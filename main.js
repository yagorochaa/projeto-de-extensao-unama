document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS DOS PROJETOS (Com Descrição Nova) ---
    const projetos = [
        {
            titulo: "Aulão SAEB 2025",
            descricao: "",
            data: "01/01/2001",
            img: "FOTOS/Projetos/Aulao Saeb/aulao-saeb1.jpeg", 
            alt: "Professores e Alunos no Aulão",
            link: "#"
        },
        {
            titulo: "Entrega Material Didático",
            descricao: "",
            data: "01/01/2001",
            img: "FOTOS/Saeb/fazendo prova 3.jpg",
            alt: "Alunos recebendo livros",
            link: "#"
        },
        {
            titulo: "Reunião com pais e responsaveis.",
            descricao: "",
            data: "01/01/2001",
            img: "FOTOS/Estrutura/biblioteca.jpeg", 
            alt: "Reunião com pais e responsaveis",
            link: "#"
        }
    ];

    // --- 2. SELEÇÃO DOS ELEMENTOS ---
    const setaEsquerda = document.querySelector('.seta-nav.esquerda');
    const setaDireita = document.querySelector('.seta-nav.direita');
    const btnMaisProjetos = document.querySelector('.btn-mais-projetos');
    
    const cardTitulo = document.querySelector('.card-texto h2');
    const cardDescricao = document.querySelector('.card-texto .descricao'); 
    const cardData = document.querySelector('.card-texto .data');
    const cardImagem = document.querySelector('.card-imagem img'); 
    const cardLink = document.querySelector('.btn-leia-mais');

    let indiceAtual = 0;

    // --- 3. FUNÇÕES DO CARROSSEL ---

    function atualizarCard() {
        const projeto = projetos[indiceAtual];

        // Transição suave
        if(cardTitulo) cardTitulo.style.opacity = 0;
        if(cardDescricao) cardDescricao.style.opacity = 0;
        
        setTimeout(() => {
            if(cardTitulo) cardTitulo.textContent = projeto.titulo;
            if(cardDescricao) cardDescricao.textContent = projeto.descricao; 
            if(cardData) cardData.textContent = projeto.data;
            
            if(cardImagem) {
                cardImagem.src = projeto.img ? projeto.img : ''; 
                cardImagem.alt = projeto.alt;
            }
            
            if(cardLink) cardLink.href = projeto.link;

            if(cardTitulo) cardTitulo.style.opacity = 1;
            if(cardDescricao) cardDescricao.style.opacity = 1;
        }, 200);
    }

    function proximoCard() {
        indiceAtual = (indiceAtual + 1) % projetos.length;
        atualizarCard();
    }

    function cardAnterior() {
        indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
        atualizarCard();
    }

    // --- 4. EVENTOS ---
    if (setaDireita) setaDireita.addEventListener('click', proximoCard);
    if (setaEsquerda) setaEsquerda.addEventListener('click', cardAnterior);

    if (btnMaisProjetos) {
        btnMaisProjetos.addEventListener('click', (event) => {
            event.preventDefault();
            const secaoAlvo = document.getElementById('projetos'); 
            if (secaoAlvo) secaoAlvo.scrollIntoView({ behavior: 'smooth' });
        });
    }

    atualizarCard();
});

// --- 5. FUNÇÕES DA GALERIA (FORA DO DOM CONTENT LOADED) ---
function abrirGaleria(srcImagem, textoCaption) {
    const modal = document.getElementById("modal-galeria");
    const modalImg = document.getElementById("img-modal");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = srcImagem;
    captionText.innerHTML = textoCaption;
}

function fecharGaleria() {
    const modal = document.getElementById("modal-galeria");
    modal.style.display = "none";
}

// --- 6. FECHAR MENU AO CLICAR NO LINK (MOBILE) ---
    const linksMenu = document.querySelectorAll('#menu ul li a');
    const checkboxMenu = document.getElementById('menu-toggle');

    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            checkboxMenu.checked = false;
        });
    });