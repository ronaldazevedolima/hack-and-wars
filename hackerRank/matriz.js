const a =[ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];


//[ 11, 2, 4 ]
//[ 4, 5, 6 ]
//[ 10, 8, -12 ]

const f = (arr) => {
    // const d1 = arr[0][0] + arr[1][1] + arr[2][2]
    let d1 = 0;
    // const d2 = arr[0][2] + arr[1][1] + arr[2][0]
    let d2 = 0;
    let c = 1;
    arr.forEach((el, i) => {
        d1 += el[i];
        d2 += el[el.length - c];
        c +=1;
    })
    console.log(d1,d2);
   return Math.abs(d1 - d2);
}
console.log(f(a));
