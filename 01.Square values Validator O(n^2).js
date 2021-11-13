function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(var i = 0; i<= arr1.length;i++){
      let a = arr2.indexOf(arr1[i]**2);
      if(a === -1){
          return false;
      }
      else{
          return true;
      }
    }
}    

same([1,2,3],[1,4,9])
