// This pattern is applicable only for a sorted array.
// Sum Zero refractor code.
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left]+arr[right];
        if(sum === 0){
            return [arr[left],arr[right]];
        }
        else if(sum>0){
            right--
        }else if(sum<0){
            left++
        }
    } 
}

sumZero([-4,-2,0,2,4])