function binarySearch(arr,val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end)/2);
    while(val !== arr[middle] && start != end){
        if(val>arr[middle]){
            start=middle+1;
        }
        else {
            end = middle-1;
        }
    }
    if(arr[middle]===val){
        return middle;
    } return -1;
     
 }
 
 binarySearch([1,2,3,4,5,6,7,8,9],5)