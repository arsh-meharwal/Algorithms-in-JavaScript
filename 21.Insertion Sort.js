function insertSort(arr){
    for(var i = 1 ; i<arr.length;i++){
        var current = arr[i];
        for(var j= i-1;j>=0 && arr[j] > current; j--){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            
        }
        console.log(arr)
    }
    return arr;
}

insertSort([2,1,5,4,7,6,9,3])