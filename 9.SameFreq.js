function sameFrequency(a,b){
    const A = Array.from(a.toString()).map(Number);
    const B = Array.from(b.toString()).map(Number);
    let c ={};
    let d ={};
    for(e of A){
        c[e] = (c[e]||0)+1
    }
    for(f of B){
        d[f] = (d[f]||0)+1
    }
    for (let key in c) {
            if (!(key in d)) {
                return false;
            }
            if (c[key] !== d[key]) {
                return false;
            }
    
        }
    return true;
    
    }
    
    sameFrequency(3813,1833)