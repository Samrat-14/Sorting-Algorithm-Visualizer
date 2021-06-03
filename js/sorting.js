// swap function 
function swap(first, second){
    let temp = first.style.height;
    first.style.height = second.style.height;
    second.style.height = temp;
}

// disable sorting buttons while sorting 
function disableSortingButton(){
    document.querySelector('#bubble').disabled = true;
    document.querySelector('#quick').disabled = true;
    document.querySelector('#merge').disabled = true;
    document.querySelector('#insertion').disabled = true;
    document.querySelector('#selection').disabled = true;
    document.querySelector('#bubble').classList.add('disable');
    document.querySelector('#quick').classList.add('disable');
    document.querySelector('#merge').classList.add('disable');
    document.querySelector('#insertion').classList.add('disable');
    document.querySelector('#selection').classList.add('disable');
} 
// enable sorting buttons after sorting 
function enableSortingButton(){
    document.querySelector('#bubble').disabled = false;
    document.querySelector('#quick').disabled = false;
    document.querySelector('#merge').disabled = false;
    document.querySelector('#insertion').disabled = false;
    document.querySelector('#selection').disabled = false;
    document.querySelector('#bubble').classList.remove('disable');
    document.querySelector('#quick').classList.remove('disable');
    document.querySelector('#merge').classList.remove('disable');
    document.querySelector('#insertion').classList.remove('disable');
    document.querySelector('#selection').classList.remove('disable');
} 

// disable size slider 
function disableSizeSlider(){
    document.querySelector('#size').disabled = true;
}
// enable size slider 
function enableSizeSlider(){
    document.querySelector('#size').disabled = false;
}

// disable generate button 
function disableGenerate(){
    document.querySelector('#generate').disabled = true;
    document.querySelector('#generate').classList.add('disable');
}
// enable generate button
function enableGenerate(){
    document.querySelector('#generate').disabled = false;
    document.querySelector('#generate').classList.remove('disable');
}

// async function for animation of sorting 
function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(() => { resolve(' ') }, milisec);
    })
}

// size slider input 
let arraySize = document.querySelector('#size');

// update bars on UI 
arraySize.addEventListener('input', function(){
    createNewArray(parseInt(arraySize.value));
});

// default input for waitforme function 
let delay = 260;

// speed slider input 
let delayElement = document.querySelector('#speed');

// update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

// create array to store random data 
let array = [];

// create new array of input size 
function createNewArray(noOfBars = 60){
    deleteChild();

    array = [];
    for(let i=0; i<noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    
    // select div #bars element 
    const bars = document.querySelector('#bars');
    
    // create multiple bars 
    for(let i=0; i<noOfBars; i++){
        const bar = document.createElement('div');
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// delete previous bars 
function deleteChild(){
    const bar = document.querySelector('#bars');
    bar.innerHTML = '';
}

// selecting generate button and adding eventlistener
const generate = document.querySelector('#generate');
generate.addEventListener('click', function(){
    enableSortingButton();
    enableSizeSlider();
    createNewArray(arraySize.value);
})