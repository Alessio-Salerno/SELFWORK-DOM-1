
// ESEMPIO TITOLO

let h1 = document.querySelector('h1');

let bottoneUno = document.querySelector('#bottoneUno');

let check = false;

// la callback dell'addEventLitener non ha bisogno di parametri!!!
bottoneUno.addEventListener('click', () => {
    
    if(check == false){
        h1.style.color = 'white';
        h1.style.backgroundColor = 'black';
        h1.innerHTML = 'Hello';
        check = true;
    }
    else{
        h1.innerHTML = 'Ciao';
        h1.style.color = 'black';
        h1.style.backgroundColor = 'white';
        check = false;
    }
    
    //    h1.classList.toggle('test');
    //    h1.style.backgroundColor = 'black';
    
});







let paragrafi = document.querySelectorAll('p');
let bottoneDue = document.querySelector('#bottoneDue');
let bottoneTre = document.querySelector('#bottoneTre');
let bottoneQuattro = document.querySelector('#bottoneQuattro');


// BOTTONE DUE

// IMPORTANTE!!
// Funzione per generare un colore random
function getColorRandom() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    // return per output di colori random 
    return `rgb(${r}, ${g}, ${b})`; 
}

bottoneDue.addEventListener('click', () => {
    paragrafi.forEach((p) => {
        p.style.color = getColorRandom(); 
        p.style.backgroundColor = getColorRandom();
    });
});




// BOTTONE TRE


bottoneTre.addEventListener('click', () => {
    paragrafi.forEach( (p) => {
        
        p.classList.toggle('custom');
    });
});


// BOTTONE QUATTRO

bottoneQuattro.addEventListener('click',   () => {
   paragrafi.forEach( (p) => {
      p.classList.toggle('custom-p');
   })
});