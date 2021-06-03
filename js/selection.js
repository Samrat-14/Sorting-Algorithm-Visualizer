async function selection(){
    const ele = document.querySelectorAll('.bar');
    for(let i=0; i<ele.length; i++){
        let min_index = i;

        // color of position to swap with next min 
        ele[i].style.background = 'var(--blue)';
        for(let j=i+1; j<ele.length; j++){

            // color for current comparison 
            ele[j].style.background = 'var(--red)';

            await waitforme(delay);

            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    // new min_indexis found so change prev min_index color back  to normal
                    ele[min_index].style.background = 'var(--cyan)';
                }
                min_index = j;
            }
            else{
                // if current comparison is more than min_index change is back to normal
                ele[j].style.background = 'var(--cyan)';
            }
        }

        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // change min_index element back to normal after swap
        ele[min_index].style.background = 'var(--cyan)';
        // sorted element to green 
        ele[i].style.background = 'var(--green)';
    }
}

const selectionSortButton = document.querySelector('#selection');
selectionSortButton.addEventListener('click', async function(){
    disableSortingButton();
    disableSizeSlider();
    disableGenerate();
    await selection();
    enableSortingButton();
    enableSizeSlider();
    enableGenerate();
})