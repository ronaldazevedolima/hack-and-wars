const arr = [ -4, 3, -9, 0, 4, 1 ];

const f = (a) => {
    let p = 0;
    let n = 0;
    let z = 0;
    a.forEach((numero) => {
        if (numero > 0) {
            p += 1;
        } else if (numero < 0) {
            n += 1;
        } else {
            z += 1;
        }
        
    })
    console.log((p/a.length).toFixed(6));
    console.log((n/a.length).toFixed(6));
    console.log((z/a.length).toFixed(6));
}

f(arr);
