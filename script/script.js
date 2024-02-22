document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById("titulo").classList.remove("hidden");
        document.getElementById("titulo").style.opacity = "1";
        document.getElementById("textinho").classList.remove("hidden");
        document.getElementById("textinho").style.opacity = "1";
        document.getElementById("textinho1").classList.remove("hidden");
        document.getElementById("textinho1").style.opacity = "1";

        /*icones*/
        document.getElementById("img-icon1").classList.remove("hidden");
        document.getElementById("img-icon1").style.opacity = "1";
        
        document.getElementById("img-icon2").classList.remove("hidden");
        document.getElementById("img-icon2").style.opacity = "1";
        

        document.getElementById("img-icon3").classList.remove("hidden");
        document.getElementById("img-icon3").style.opacity = "1";
        

        document.getElementById("img-icon4").classList.remove("hidden");
        document.getElementById("img-icon4").style.opacity = "1";
        

        document.getElementById("img-icon5").classList.remove("hidden");
        document.getElementById("img-icon5").style.opacity = "1";
        

        document.getElementById("img-icon6").classList.remove("hidden");
        document.getElementById("img-icon6").style.opacity = "1";
        
       
     
    }, 1000);
});


let textosDosAlertas = [
  "Programming Foundation:\nAlgorithms and Programming Logic, Web Content Creation, Networks and Internet, Data Structures with PHP, SQL Server and Management Studio, Software Engineering for the Web, Internet Basics, Digital Design, Business and Marketing, Electronics, Internet Business Creation, Servers and their Operating Systems, Project Management Practices, Internet Site Design Patterns, Accessibility, Reading and Text Production, English\n\nMathematics:\n Fundamentals of Elementary Mathematics, Discrete Mathematics, Statistics.\n\nSecurity:\n Internet Systems Security, Legislation Applied to the Internet.\n\nDevelopment: \nNavigation and Interaction Design, Development for Devices, Development for Servers, Prototyping and Usability Testing, Service-Oriented Architecture, Findability Design, Internet Site Design Patterns (HTML, CSS, JavaScript).",
  "Programming Foundation:\n System Development, Systems Analysis and Design, Internet and Protocols, Computer Fundamentals, Instrumental English, Portuguese Language, Work and Technology, Programming Techniques, Programming and Algorithms.\n\n Development: \n Mobile Application Programming I, II, III (Mobile) with Csharp, Web Programming (HTML, CSS, and JavaScript), Database I, II, III (MySQL), Digital Design (Gimp, Fireworks), Embedded Systems, Software Quality and Testing. ",
  "CorelDraw by Share Institute (ended - 2020)\n\n Cybersecurity Essentials by LINUX FOUNDATION (ended - 2024):\n Cybersecurity Awareness, Malware, Cybersecurity Breaches, Protection and Prevention, Mobile Device Security, Social Network Safety, Prevention Software.\n\n AI Generative by LinkedIn Learning\n Search Engine Technology Fundamentals, Generative AI Fundamentals."
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

