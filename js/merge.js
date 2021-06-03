async function merging(ele, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i=0; i<n1; i++){
        await waitforme(delay);

        // color 
        ele[low+i].style.background = 'var(--orange)';
        left[i] = ele[low+i].style.height;
    }

    for(let i=0; i<n2; i++){
        await waitforme(delay);

        // color 
        ele[mid+1+i].style.background = 'var(--yellow)';
        right[i] = ele[mid+1+i].style.height;
    }

    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i<n1 && j<n2){
        await waitforme(delay);

        // color for compared bars 
        if(parseInt(left[i]) <= parseInt(right[j])){
            // color 
            if((n1+n2) === ele.length){
                ele[k].style.background = 'var(--green)';
            }
            else{
                ele[k].style.background = 'var(--lightgreen)';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            // color 
            if((n1+n2) === ele.length){
                ele[k].style.background = 'var(--green)';
            }
            else{
                ele[k].style.background = 'var(--lightgreen)';
            }

            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        await waitforme(delay);

        // color 
        if((n1+n2) === ele.length){
            ele[k].style.background = 'var(--green)';
        }
        else{
            ele[k].style.background = 'var(--lightgreen)';
        }

        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j<n2){
        await waitforme(delay);

        // color 
        if((n1+n2) === ele.length){
            ele[k].style.background = 'var(--green)';
        }
        else{
            ele[k].style.background = 'var(--lightgreen)';
        }

        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function merge(ele, l, r){
    if(l>=r){
        return;
    }
    const m = l + Math.floor((r-l)/2);
    await merge(ele, l, m);
    await merge(ele, m+1, r);
    await merging(ele, l, m, r);
}

const mergeSortButton = document.querySelector('#merge');
mergeSortButton.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingButton();
    disableSizeSlider();
    disableGenerate();
    await merge(ele, l, r);
    enableSortingButton();
    enableSizeSlider();
    enableGenerate();
})