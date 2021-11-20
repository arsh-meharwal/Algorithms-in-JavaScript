function mergeArray(arr1,arr2){
    var a =[];
    let j = 0;
    let i = 0;
    while(j < arr1.length && i < arr2.length){
        if(arr1[j]<arr2[i]){
            a.push(arr1[j])
            j++
        }else{
            a.push(arr2[i])
            i++
        }
    }
    while(j<arr1.length){
        a.push(arr1[j])
        j++
    }
    while(i<arr2.length){
        a.push(arr2[i])
        i++
    }

    return a;

}

mergeArray([1,4,6,8],[2,3,7,9])