var contCertificado = document.querySelector('.contCertificate');
var titleBtnCert = document.querySelector('.certificates');

const buttons = {
    btnHardware: document.getElementById('btnHardware'),
    btnRedes: document.getElementById('btnRedes'),
    btnDev: document.getElementById('btnDev'),
    btnOffice: document.getElementById('btnOffice'),
    btnCertificates: document.querySelector('.certificates')
}
const allTexts = {
    title: document.querySelector('.titleContainerExp'),
    subtitle: document.querySelector('.subtitleContainerExp'),
    text: document.querySelector('.textContainerExp'),
    caption: document.querySelector('.legendContImgExp')
}
const allImages = {
    imgShape: document.querySelector('.containerImgExp-img'),
    imgShape2: document.querySelector('.containerImgExp-img2'),
    imgShape3: document.querySelector('.containerImgExp-img3'),
    imgHardware: '/Versão Alpha/Utilitários/IMG/expHardware.jpg',
    imgRedes: '/Versão Alpha/Utilitários/IMG/expRedes.jpg',
    imgDev: '/Versão Alpha/Utilitários/IMG/expDev.jpg',
    imgCertSenai: '/Versão Alpha//Utilitários/IMG/expCertSenai.jpeg',
    imgCertPeople: '/Versão Alpha//Utilitários/IMG/expCertPeople.jpeg',
    imgCertCiee: '/Versão Alpha/Utilitários/IMG/expCertCiee.jpg'
};

buttons.btnHardware.addEventListener("click", containerHardware);
buttons.btnRedes.addEventListener("click", containerRedes);
buttons.btnDev.addEventListener("click", containerDev);
buttons.btnOffice.addEventListener("click", containerOffice);
buttons.btnCertificates.addEventListener("click", containerCertificates);


function containerHardware() {

    allTexts.title.innerHTML = 'Técnico em informática - TI 1.21 • Senac 2021';
    allTexts.subtitle.innerHTML = 'Hardware de computadores';
    allTexts.text.innerHTML = 'Hardware no Senac me deu a base   conhecimento que eu tenho hoje: <br> montagem Pc’s / notebooks - troca de peças; <br> uso de multímetro; <br> manutenção preventiva / corretiva - ensino prático; <br> formatação de computadores; <br> criação de modelo de OS; <br></br> Projeto final : Simular criação de empresa de manutenção, atender cliente profissionalmente, com Ordem de Serviço, orçamento, fluxograma de funcionamento e outros.';
    allImages.imgShape.style.display = "flex";
    allImages.imgShape.src = allImages.imgHardware;
    allTexts.caption.style.display = 'flex';
    allTexts.caption.innerHTML = 'Eu simulando manutenção em uma máquina - Senac 2021';
    buttons.btnCertificates.style.display = 'none';
    contCertificado.style.display = "none"
}

function containerRedes() {

    allTexts.title.innerHTML = 'Técnico em informática - TI 1.21 • Senac 2021 - 22';
    allTexts.subtitle.innerHTML = 'Redes de Computadores';
    allTexts.text.innerHTML = 'Redes de Computadores no Senac me ensinou a base sobre a Internet: <br> configuração inicial Windows Server 2019: (básico) <br> configurar escopo p / range de IP’s; <br> conceito de IP’s - V4 / V6; <br> criar U.O., usuários, G.P.O., cotas, triagens de arquivos; <br> gereciar backup server; <br> configuração e de modem de internet; <br></br> Projeto final : Simular criação de empresa de redes, atender cliente profissionalmente, com Ordem de Serviço, orçamento, e apresentar em PowerPoint, com tudo descrito em tabelas e imagens tudo.';
    allImages.imgShape.style.display = "flex";
    allImages.imgShape.src = allImages.imgRedes;
    allTexts.caption.style.display = 'flex';
    allTexts.caption.innerHTML = 'Planta feita no SketchUp de minha autoria - SkechtUp 2021';
    buttons.btnCertificates.style.display = 'none';
    contCertificado.style.display = "none"
}

function containerDev() {

    allTexts.title.innerHTML = 'Técnico em informática - TI 1.21 • Senac 2022';
    allTexts.subtitle.innerHTML = 'Desenvolvimento de Software';
    allTexts.text.innerHTML = 'Programação foi a última matéria lecionada no Senac: <br> site Web - HTML / CSS / PHP / JS - banco de dados MySql local / online - (Intermediário); <br> essa página que você navega é de minha autoria; <br> app Desk - C# banco de dados local MySql (Básico); <br> app Mobile - Programação em bloco (Básico); <br> resumo: <br> HTML / CSS - intermediário <br> JS / PHP / C# - básico <br> Mysql / SQL - básico para intermediário <br></br> Projeto final: cada aplicação foi um projeto diferente.';
    allImages.imgShape.style.display = "flex";
    allImages.imgShape.src = allImages.imgDev;
    allTexts.caption.style.display = 'flex';
    allTexts.caption.innerHTML = 'Imagem modelo - Sem direitos autorais Unsplash Images 2022';
    buttons.btnCertificates.style.display = 'none';
    contCertificado.style.display = "none"
}

function containerOffice() {

    allTexts.title.innerHTML = 'Pacote Office / Outros Cursos';
    allTexts.subtitle.innerHTML = 'Excel - Word - PowerPoint / Logíca de Pro. - Manutenção PC, Celular; ';
    allTexts.text.innerHTML = 'Conhecimentos no pacote Office padrão intermediário <br> Lógica de Programação / Manutenção Pc - Celular <br></br> • confira meus certificados abaixo.';
    allImages.imgShape.style.display = "none";
    allTexts.caption.style.display = 'none';
    buttons.btnCertificates.style.display = 'flex';
    contCertificado.style.display = "none"
}

function containerCertificates() {

    if (contCertificado.style.display === "none") {
        contCertificado.style.display = "block"
    } else {
        contCertificado.style.display = "none"
    }
}