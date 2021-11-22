//This function is used in quick Sort Algorithm.
//This function sends the first value of Array to an index where no value on left side to it is greater than it(1st value). 

function pivot(arr,left,right) {
    let k = 1;
    for (j = 1; j <=right; j++) {
        if (arr[left] > arr[j]) {
            [arr[left + k], arr[j]] = [arr[j], arr[left + k]]
            k++;
        }
    }
    [arr[left], arr[left + k - 1]] = [arr[left + k - 1], arr[left]];
    return arr[left + k - 1];
}