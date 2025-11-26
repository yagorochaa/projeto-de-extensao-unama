document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. DADOS DO CARROSSEL (Seção Início)
    // =========================================================
    const projetos = [
        {
            titulo: "Aulão SAEB 2025",
            descricao: "Prepare-se para o SAEB com nossos melhores professores! Revisão completa de Matemática e Português para garantir sua nota máxima e o melhor desempenho da nossa escola.",
            data: "15/10/2025",
            img: "FOTOS/Projetos/Aulao Saeb/aulao-saeb9.jpeg", 
            alt: "Professores e Alunos no Aulão SAEB",
            link: "#projetos"
        },
        {
            titulo: "Aplicação do SAEB",
            descricao: "Momentos de concentração e dedicação dos nossos alunos durante a aplicação da prova oficial do SAEB em nossas salas de aula.",
            data: "20/11/2025",
            img: "FOTOS/Saeb/fazendo prova 1.jpg",
            alt: "Alunos realizando a prova",
            link: "#projetos"
        },
        {
            titulo: "Reunião de Pais e Mestres",
            descricao: "Encontro bimestral fundamental para alinhar expectativas, discutir o desempenho dos alunos e apresentar as novas melhorias na infraestrutura da escola.",
            data: "05/05/2025",
            img: "FOTOS/Projetos/Reuniao Pais/reuniao-pais.jpeg", 
            alt: "Reunião com pais e responsáveis",
            link: "#projetos"
        }
    ];

    // =========================================================
    // 2. CONFIGURAÇÃO DO CARROSSEL
    // =========================================================
    const setaEsquerda = document.querySelector('.seta-nav.esquerda');
    const setaDireita = document.querySelector('.seta-nav.direita');
    
    // Elementos que mudam
    const cardTitulo = document.querySelector('.card-texto h2');
    const cardDescricao = document.querySelector('.card-texto .descricao'); 
    const cardData = document.querySelector('.card-texto .data');
    const cardImagem = document.querySelector('.img-card-fit'); // Classe correta da imagem
    const cardLink = document.querySelector('.btn-leia-mais');

    let indiceAtual = 0;

    function atualizarCard() {
        const projeto = projetos[indiceAtual];

        // PASSO 1: Oculta o conteúdo (Fade Out)
        // Isso deve bater com o "transition: opacity 0.4s" do CSS
        if(cardTitulo) cardTitulo.style.opacity = 0;
        if(cardDescricao) cardDescricao.style.opacity = 0;
        if(cardData) cardData.style.opacity = 0;
        if(cardImagem) cardImagem.style.opacity = 0.8; // Imagem dá uma leve piscada

        // PASSO 2: Aguarda o tempo da transição, troca os dados e reaparece
        setTimeout(() => {
            if(cardTitulo) cardTitulo.textContent = projeto.titulo;
            if(cardDescricao) cardDescricao.textContent = projeto.descricao; 
            if(cardData) cardData.textContent = projeto.data;
            
            if(cardImagem) {
                cardImagem.src = projeto.img ? projeto.img : ''; 
                cardImagem.alt = projeto.alt;
            }
            
            if(cardLink) cardLink.href = projeto.link;

            // PASSO 3: Mostra o conteúdo (Fade In)
            if(cardTitulo) cardTitulo.style.opacity = 1;
            if(cardDescricao) cardDescricao.style.opacity = 1;
            if(cardData) cardData.style.opacity = 1;
            if(cardImagem) cardImagem.style.opacity = 1;

        }, 400); // 400 milissegundos de espera
    }

    function proximoCard() {
        indiceAtual = (indiceAtual + 1) % projetos.length;
        atualizarCard();
    }

    function cardAnterior() {
        indiceAtual = (indiceAtual - 1 + projetos.length) % projetos.length;
        atualizarCard();
    }

    // Eventos de Clique nas Setas
    if (setaDireita) setaDireita.addEventListener('click', proximoCard);
    if (setaEsquerda) setaEsquerda.addEventListener('click', cardAnterior);

    // Inicializa o primeiro card
    atualizarCard();


    // =========================================================
    // 3. BOTÃO "MAIS PROJETOS" (Scroll Suave)
    // =========================================================
    const btnMaisProjetos = document.querySelector('.btn-mais-projetos');
    if (btnMaisProjetos) {
        btnMaisProjetos.addEventListener('click', (event) => {
            event.preventDefault();
            const secaoAlvo = document.getElementById('projetos'); 
            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // =========================================================
    // 4. MENU MOBILE (Fechar ao clicar no link)
    // =========================================================
    const linksMenu = document.querySelectorAll('#menu ul li a');
    const checkboxMenu = document.getElementById('menu-toggle');

    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
             // Se o menu estiver aberto, fecha ele desmarcando o checkbox
             if(checkboxMenu) checkboxMenu.checked = false;
        });
    });

});

// =========================================================
// 5. FUNÇÕES DA GALERIA (MODAL)
// Estas funções precisam ficar FORA do 'DOMContentLoaded' 
// para serem acessadas pelo onclick="" do HTML
// =========================================================

function abrirGaleria(srcImagem, textoCaption) {
    const modal = document.getElementById("modal-galeria");
    const modalImg = document.getElementById("img-modal");
    const captionText = document.getElementById("caption");
    
    if(modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = srcImagem;
        if(captionText) captionText.innerHTML = textoCaption;
    }
}

function fecharGaleria() {
    const modal = document.getElementById("modal-galeria");
    if(modal) {
        modal.style.display = "none";
    }
}

// Fecha o modal se clicar fora da imagem (no fundo preto)
window.onclick = function(event) {
    const modal = document.getElementById("modal-galeria");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}