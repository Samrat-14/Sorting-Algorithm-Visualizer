async function partition(ele, l, r){
    let i = l-1;
    // color pivot elemet 
    ele[r].style.background = 'var(--red)';
    for(let j=l; j<=r-1; j++){
        // color current element 
        ele[j].style.background = 'var(--yellow)';
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'var(--orange)';
            if(i != j) ele[j].style.background = 'var(--orange)';
            await waitforme(delay);
        }
        else{
            // color if not less than pivot 
            ele[j].style.background = 'var(--pink)';
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]);
    // color 
    ele[r].style.background = 'var(--pink)';
    ele[i].style.background = 'var(--green)';

    await waitforme(delay);

    // color 
    for(let k=0; k<ele.length; k++){
        if(ele[k].style.background != 'var(--green)'){
            ele[k].style.background = 'var(--cyan)';
        }
    }

    return i;
}

async function quick(ele, l, r){
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quick(ele, l, pivot_index-1);
        await quick(ele, pivot_index+1, r);
    }
    else{
        if(l>=0 && r>=0 && l<ele.length && r<ele.length){
            ele[r].style.background = 'var(--green)';
            ele[l].style.background = 'var(--green)';
        }
    }
}

const quickSortButton = document.querySelector('#quick');
quickSortButton.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingButton();
    disableSizeSlider();
    disableGenerate();
    await quick(ele, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableGenerate();
})