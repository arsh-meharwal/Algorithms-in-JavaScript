function selSort(arr){
    for(var i=0;i<arr.length;i++){
      for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
          [arr[i],arr[j]]=[arr[j],arr[i]]
        }
  
      }
    }
    return arr
  }
  
  selSort([5,4,7,3,8,9,2,1,1])