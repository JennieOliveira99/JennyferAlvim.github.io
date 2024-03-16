document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById("titulo").classList.remove("hidden");
        document.getElementById("titulo").style.opacity = "1";
        document.getElementById("textinho").classList.remove("hidden");
        document.getElementById("textinho").style.opacity = "1";
        document.getElementById("textinho1").classList.remove("hidden");
        document.getElementById("textinho1").style.opacity = "1";

    
       
     
    }, 1000);
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




window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector('nav a[href="#' + sectionId + '"]');
      
      // Remova a classe active de todos os links
      document.querySelectorAll('nav a').forEach(function(link) {
        link.classList.remove('active');
      });

      // Adicione a classe active apenas ao link correspondente à seção visível
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });
});
