function counter(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let a = {}; //defining an objects
    let b = {}; //defining an objects
    for (let val of arr1) {
        a[val] = (a[val] || 0) + 1; //val is just a variable, not a JS tool.
    }
    for (let val of arr2) {
        b[val] = (b[val] || 0) + 1;
    }
    for (let key in a) {
        if (!(key ** 2 in b)) {
            return false;
        }
        if (b[key ** 2] !== a[key]) {
            return false;
        }

    }
    return true;

}

counter([1, 2, 3, 4], [1, 4, 9, 16])
