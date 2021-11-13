function fib(range){
    let a =[1,1];
    if (range ==0) return [1]
    if(range==1) return a;
    else{
        for(i =2;i<=range;i++){
            a.push(a[i-1]+a[i-2]);
        }
        return a;
    }

}

fib(5)