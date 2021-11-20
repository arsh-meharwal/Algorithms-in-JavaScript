function mergeArray(arr1, arr2) {
    var a = [];
    let j = 0;
    let i = 0;
    while (j < arr1.length && i < arr2.length) {
        if (arr1[j] < arr2[i]) {
            a.push(arr1[j])
            j++
        } else {
            a.push(arr2[i])
            i++
        }
    }
    while (j < arr1.length) {
        a.push(arr1[j])
        j++
    }
    while (i < arr2.length) {
        a.push(arr2[i])
        i++
    }

    return a;

}

function mergeSort(array){                              // [2,1,3,6,1,2] (1st run)                           [2,1,3] (2nd run)                                [2] (3rd run)        
    if(array.length<=1) return array;                   // false (1st run)                                   false (2nd run)                                  true (3rd run) ,[2] returned now traceback          
    let mid = Math.floor(array.length/2);               // mid = 3 (1st run)                                 mid = 1 (2nd run)                                
    let left = mergeSort(array.slice(0,mid));           // [2,1,3] sent for 2nd run (Call Stack Stopped)     [2] sent for 3rd run (Call Stack Stopped, popped after 3rd run)
    let right = mergeSort(array.slice(mid));            //                                                                                                    [2,1,3] now goes to right                                                     
    return mergeArray(left,right);                      //
}


mergeSort([2,1,3,6,1,2])