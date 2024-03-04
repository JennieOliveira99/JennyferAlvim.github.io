const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById("capitulo");
const numeroCapitulos = 10;

let taTocando = 0; /*a pagina abre mas a musica nao toca assim que a pagina abre, apensa quando clica no botao por isso começa no 0 e nao o 1*/ 
/*quando executar uma função sempre usa o abrir e fechar parenteses*/
/*a informaçao de se esta tocando ou nao se torna variavel, na medida em que o usuario pausa, por isso ela nao é uma const e sim um let*/


/*variavel para mudar de faixa*/
let capituloAtual = 1;



function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');/*escondendo o botao de play para exibir o de pause*/
    botaoPlayPause.classList.add('bi-pause-circle');/*adcionando o botao de pause enquanto o audio esta tocando*/
 }
/* fazendo funçao pausa de pausa*/
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle');/*fazendo o inverso, se ta pausado, esconde o botao pause e mostra o botao play*/
    botaoPlayPause.classList.remove('bi-pause-circle');
}


/*se estiver tocando for igual a zero, ou seja nao esta tocando, ela inicia a faixa
    e caso ela esteja, ela pausa*/

function tocarOuPausar(){
    
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1; /*atualizando o valor para que a funcao de pausar faixa funcione*/
    } else{
        pausarFaixa();
        taTocando = 0; /*atualizando para que a função de play funcione*/
    }
}

function trocarNomeFaixa(){
    /*trocando o texto do capitulo e adicionando a palavra "capitulo" e concatenando com a funcao de capitulo atual*/
    nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}
function proximaFaixa(){
    /*se capitulo atual for igual a 10(dez esta declarado na variavel  numeroCapitulos)*/
    if(capituloAtual < numeroCapitulos){
        capituloAtual += 1;
    }else{
    capituloAtual = 1;
    }
    audioCapitulo.src="./books/dom-casmurro/" + capituloAtual + '.mp3'; /*trocando sucessivamente as faixas, referenciando a pasta*/

    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}


function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual = numeroCapitulos; 
    }else{
    capituloAtual = capituloAtual -1;
    }
    audioCapitulo.src="./books/dom-casmurro/" + capituloAtual + '.mp3'; /*trocando sucessivamente as faixas, referenciando a pasta*/
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);