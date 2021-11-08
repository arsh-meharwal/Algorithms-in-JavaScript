function Downcounter(num){
    if(num<= 0){
        return null;
    }
    console.log(num);
    num--;

    Downcounter(num)
}

Downcounter(4)