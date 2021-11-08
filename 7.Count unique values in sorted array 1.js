//Freq Counter method

function uniqueValues(arr1){
    let a ={};
    let b ={};
    for(val of arr1){
        a[val] = (a[val] || 0) + 1;
    }
    console.log(a);
    for(key in a){
        console.log(`The unique values are ${key}`)
    }
}

uniqueValues([1,1,1,1,1,2,2,2,3,3])