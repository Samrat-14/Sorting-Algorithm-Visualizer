async function bubble(){
    const ele = document.querySelectorAll('.bar');
    for(let i=0; i<ele.length-1; i++){
        for(let j=0; j<ele.length-i-1; j++){
            ele[j].style.background = 'var(--blue)';
            ele[j+1].style.background = 'var(--blue)';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'var(--cyan)';
            ele[j+1].style.background = 'var(--cyan)';
        }
        ele[ele.length-i-1].style.background = 'var(--green)';
    }
    ele[0].style.background = 'var(--green)';
}

const bubbleSortButton = document.querySelector('#bubble');
bubbleSortButton.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableGenerate();
    await bubble();
    enableSortingButton();
    enableSizeSlider();
    enableGenerate();
})