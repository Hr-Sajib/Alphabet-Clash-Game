
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
    showElementById('gameSection');
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
    let score = parseInt(document.getElementById('scoreCount').innerText);
    let life = parseInt(document.getElementById('lifeCount').innerText);

    if(playerPressed === expectedKey){
        continueGame();
        BgNormal(expectedKey);
        score+=1;
        document.getElementById('scoreCount').innerText = score;
    }
    else{
        life-=1;
        document.getElementById('lifeCount').innerText = life;
        if(life===0){
            exitGame();
        }
    }
}

function exitGame(){
    hideElementById('gameSection');
    showElementById('scoreSection');
    setFinalScore();
}

function setFinalScore(){
    document.getElementById('finalScore').innerText = document.getElementById('scoreCount').innerText;
}