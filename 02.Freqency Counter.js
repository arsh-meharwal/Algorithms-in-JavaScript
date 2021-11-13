function counter(arr1,arr2){
    let a ={}; //defining an objects
    let b ={}; //defining an objects
    for(let val of arr1){
        a[val] = (a[val] || 0) + 1;
    }
    for(let val of arr2){
        b[val] = (b[val] || 0) + 1;
    }
    console.log(a);
    console.log(b);
    
}

counter([1,23,4,4,6,7],[9,88,8,8,88,7,6,5])
