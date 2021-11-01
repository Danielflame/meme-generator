'use strict'

//Selecting Elements
const genMeme = document.querySelector('#generate');
const theMeme = document.querySelector('.meme');

//Starting Conditions
theMeme.classList.add('hidden');

//Variables

//Functions
const generateMeme = function (){
    let changeMeme = Math.trunc(Math.random() * 11) + 1;
    theMeme.classList.add('show');
    theMeme.src = `images/meme-${changeMeme}.jpeg`;
    // console.log(changeMeme);
}

//Event Listeners
genMeme.addEventListener('click', generateMeme);