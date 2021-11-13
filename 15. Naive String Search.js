function search(long,short){
    let foundValues = 0;
    for(var i = 0;i< long.length;i++){
        for(var j = 0;j< short.length;j++){
            if(short[j]!==long[i+j]) break;   //if short[0],short[1],short[2]to short[n] is not equal to long[anyplace+0],long[anyplace+1]tolong[anyplace+n] break out of j loop

            if(j===short.length-1) foundValues++;
        }
    }
    return foundValues;
}