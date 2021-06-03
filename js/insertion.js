async function insertion(){
    const ele = document.querySelectorAll('.bar');
    // color
    ele[0].style.background = 'var(--green)';
    for(let i=1; i<ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        // color 
        ele[i].style.background = 'var(--blue)';

        await waitforme(delay);

        while(j>=0 && (parseInt(ele[j].style.height) > parseInt(key))){
            // color 
            ele[j].style.background = 'var(--blue)';
            ele[j+1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color 
            for(let k=i; k>=0; k--){
                ele[k].style.background = 'var(--green)';
            }
        }
        ele[j+1].style.height = key;
        // color 
        ele[i].style.background = 'var(--green)';
    }
}

const insertionSortButton = document.querySelector('#insertion');
insertionSortButton.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableGenerate();
    await insertion();
    enableSortingButton();
    enableSizeSlider();
    enableGenerate();
})