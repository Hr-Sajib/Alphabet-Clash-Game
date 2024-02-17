
// Utility Functions

function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}
function BgHighlight(elementId){
    document.getElementById(elementId).classList.add('bg-red-100','text-black');
}
function BgNormal(elementId){
    document.getElementById(elementId).classList.remove('bg-red-100','text-black');
}




// main processes

function play(){
    hideElementById('homeSection');
    hideElementById('homeSection');
    showElementById('scoreSection');
    document.getElementById('scoreCount').innerText = 0;
    document.getElementById('lifeCount').innerText = 3;
    continueGame();
}

function continueGame(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const index =  Math.round(Math.random()*25);
    const later = alphabets[index];
    const l = later;
    document.getElementById('currentLater').innerText = l;
    BgHighlight(l);
}


document.addEventListener('keyup', handleKeypressEvent);

function handleKeypressEvent(event){
    const playerPressed = event.key;
    const expectedKey = document.getElementById('currentLater').innerText;


    if(playerPressed === expectedKey){
        BgNormal(expectedKey);

        //score update
        const currentScore = parseInt(document.getElementById('scoreCount').innerText);
        const newScore = currentScore + 1;
        document.getElementById('scoreCount').innerText = newScore;

        continueGame();
    }
    else{
        BgNormal(expectedKey);
        //life update
        const currentLife = parseInt(document.getElementById('lifeCount').innerText);
        const newLife = currentLife - 1;
        document.getElementById('lifeCount').innerText = newLife;
        continueGame();

        if(newLife === 0){
            gameOver();
        }
    }
}

function gameOver(){
    hideElementById('gameSection');
    showElementById('scoreSection');
    setFinalScore();
}

function setFinalScore(){
    document.getElementById('finalScore').innerText = document.getElementById('scoreCount').innerText;
}

function playAgain(){
    var elements = document.getElementsByClassName('kbd');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('bg-red-100', 'text-black');
    }
    
  play();
}