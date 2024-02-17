
// Utility Functions

function hideElementById(elementId){
    document.getElementById(elementId).classList.add('hidden');
}
function showElementById(elementId){
    document.getElementById(elementId).classList.remove('hidden');
}



// main processes

function play(){
    hideElementById('homeSection');
    showElementById('gameSection');
    const l = continueGame();
    document.getElementById('currentLater').innerText = l;
    BgHighlight(l);
}

function continueGame(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const index =  Math.round(Math.random()*25);
    const later = alphabets[index];
    return later;
}
   


function BgHighlight(elementId){
    document.getElementById(elementId).classList.add('bg-red-100','text-black');
}
