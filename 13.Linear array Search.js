function linearSearch(arr,val){
    for(var i=0; i < arr.length;i++){
        if(arr[i]===val) return i
        }
    return -1;
  }
  
  linearSearch([1,2,6,8,3],8)