'use strict';

function main(){

    const mainElement= document.querySelector('main');

    function buildDom(html){
        mainElement.innerHTML = html;
        return mainElement;
    }


    function buildSplashScreen(){
        const splasScreen = buildDom(`
         <section>
          <h1> Eternal Enemies</h1>
          <button class="start-button">Start</buton>
         </section>
        
        `);
        const startButton = document.querySelector('.start-button');

        startButton.addEventListener('click',buildGameScreen);
    }
    function buildGameScreen(){
        const splashScreen = buildDom(`
         <section class="game-container">
          <canvas></canvas> 
         </section>
        `);

        const gamecontainerElement=document.querySelector(`.game-container`)
        const width = gamecontainerElement.offsetWidth;
        const height = gamecontainerElement.offsetHeight;
        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width',width);
        canvasElement.setAttribute('height',height);

        setTimeout(buildGameOverScreen,3000);
    }
    
    function buildGameOverScreen(){
        const buildGameOverScreen = buildDom(`
         <section>
         <h1>Game</h1>
         <button>Restart</button>
         </section>
        `)
        const restartButton=document.querySelector('.reestart-button');
        restartButton.addEventListener('click',buildGameScreen);
    } 
    
    buildSplashScreen();


}
  window.addEventListener('load',main);
