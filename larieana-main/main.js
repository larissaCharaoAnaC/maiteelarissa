function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
document.querySelector('.tecla_Pom').onclick = tocaSomPom;} 

    function tocaSomClap(){
        document.querySelector('#som_tecla_clap').play();
document.querySelector('.tecla_clap').onclick = tocaSomClap;} 

    function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
document.querySelector('.tecla_tim').onclick = tocaSomTim;} 

    function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
document.querySelector('.tecla_puff').onclick = tocaSomPuff;}

    function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
document.querySelector('.tecla_splash').onclick = tocaSomSplash;} 

    function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
document.querySelector('.tecla_toim').onclick = tocaSomToim;} 

    function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
document.querySelector('.tecla_Psh').onclick = tocaSomPsh;} 

    function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
document.querySelector('.tecla_Tic').onclick = tocaSomTic;} 

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
    document.querySelector('.tecla_Tom').onclick = tocaSomTom;} 

    document.querySelectorAll('.tecla');
    const listaDeTeclas = document.querySelectorAll('.tecla');

    listaDeTeclas[0].onclick = tocaSomPom;
    listaDeTeclas[0].onclick = tocaSomClap;
    listaDeTeclas[0].onclick = tocaSomTim;
    listaDeTeclas[0].onclick = tocaSomPuff;
    listaDeTeclas[0].onclick = tocaSomSplash;
    listaDeTeclas[0].onclick = tocaSomToim;
    listaDeTeclas[0].onclick = tocaSomPsh;
    listaDeTeclas[0].onclick = tocaSomTic;
    listaDeTeclas[0].onclick = tocaSomTom;

//extrairde repetição - Enquanto 
while(contador < listaDeTeclas.length){
    let contador = 0;
    listaDeTeclas(contador).onclick = tocaSomPom;

    contador = cntador + 1;
}