function validanagram(arr1,arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let a ={}; //defining an objects
    let b ={}; //defining an objects
    for(let val of arr1){
        a[val] = (a[val] || 0) + 1;
    }
    for(let val of arr2){
        b[val] = (b[val] || 0) + 1;
    }
    for(let key in a){
        if(!(key in b)){
            return false
        }
        if(a[key] !== b[key]){
            return false
        }
    }
    return true
    
}

validanagram('arsh','raash')
  
