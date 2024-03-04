document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById("titulo").classList.remove("hidden");
        document.getElementById("titulo").style.opacity = "1";
        document.getElementById("textinho").classList.remove("hidden");
        document.getElementById("textinho").style.opacity = "1";
        document.getElementById("textinho1").classList.remove("hidden");
        document.getElementById("textinho1").style.opacity = "1";

        /*icones*/
        document.getElementById("button1").classList.remove("hidden");
        document.getElementById("button2").style.opacity = "1";
        
        document.getElementById("button2").classList.remove("hidden");
        document.getElementById("button2").style.opacity = "1";
        

   
       // document.getElementById("button").style.opacity = "1";
        
       
     
    }, 1000);
});


let textosDosAlertas = [
  "Fundação de Programação:\nAlgoritmos e Lógica de Programação, Criação de Conteúdo Web, Redes e Internet, Estruturas de Dados com PHP, SQL Server e Management Studio, Engenharia de Software para a Web, Noções Básicas de Internet, Design Digital, Negócios e Marketing, Eletrônica, Criação de Negócios na Internet, Servidores e seus Sistemas Operacionais, Práticas de Gerenciamento de Projetos, Padrões de Design de Sites na Internet, Acessibilidade, Leitura e Produção de Texto, Inglês\n\nMatemática:\n Fundamentos da Matemática Elementar, Matemática Discreta, Estatística.\n\nSegurança:\n Segurança de Sistemas de Internet, Legislação Aplicada à Internet.\n\nDesenvolvimento: \nDesign de Navegação e Interação, Desenvolvimento para Dispositivos, Desenvolvimento para Servidores, Prototipagem e Testes de Usabilidade, Arquitetura Orientada a Serviços, Design de Localização, Padrões de Design de Sites na Internet (HTML, CSS, JavaScript).",
  "Fundação de Programação:\n Desenvolvimento de Sistemas, Análise e Projeto de Sistemas, Internet e Protocolos, Fundamentos de Computação, Inglês Instrumental, Língua Portuguesa, Trabalho e Tecnologia, Técnicas de Programação, Programação e Algoritmos.\n\n Desenvolvimento: \nProgramação de Aplicativos Móveis I, II, III (Mobile) com Csharp, Programação Web (HTML, CSS e JavaScript), Banco de Dados I, II, III (MySQL), Design Digital (Gimp, Fireworks), Sistemas Embarcados, Qualidade de Software e Testes. ",
  "CorelDraw pelo Instituto Share (concluído - 2020)\n\n Fundamentos de Cibersegurança pela LINUX FOUNDATION (concluído - 2024):\n Conscientização em Cibersegurança, Malware, Violações de Segurança Cibernética, Proteção e Prevenção, Segurança de Dispositivos Móveis, Segurança de Redes Sociais, Software de Prevenção.\n\n IA Generativa pelo LinkedIn Learning\n Fundamentos de Tecnologia de Motores de Busca, Fundamentos de IA Generativa."
];

// Obtendo uma coleção de elementos com a classe "link-grade"
let botoesGrade = document.querySelectorAll(".link-grade");

// Iterando sobre a coleção e adicionando um ouvinte de evento a cada botão
botoesGrade.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Obtendo o índice do botão do atributo de dados
    let indice = botao.getAttribute('data-indice');
    
    // Obtendo o texto do array com base no índice
    let textoPersonalizado = textosDosAlertas[indice];
    
    // Exibindo alerta com o texto personalizado
    alert(textoPersonalizado);
  });
});



//pdf download

function downloadPDF() {
  // Caminho  do arquivo PDF
  const pdfPath = 'img/pdf.pdf';
  
  // Nome do arquivo
  const fileName = 'pdf.pdf';
  
  // Cria um elemento <a> temporário
  const link = document.createElement('a');
  
  // Define o atributo href com o caminho  do arquivo PDF
  link.href = pdfPath;
  
  // Define o atributo download com o nome do arquivo
  link.download = fileName;
  
  // Adiciona o elemento <a> ao corpo do documento
  document.body.appendChild(link);
  
  // Clica no link para iniciar o download
  link.click();
  
  // Remove o elemento <a> do corpo do documento
  document.body.removeChild(link);
}

