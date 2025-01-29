// https://www.codewars.com/kata/563301d00656afb8a600009d/train/javascript

const f = (arr) => {
    return arr.reduce((acc, cur) => {
        if (typeof acc == "object") {
            acc = f(acc);
        }
        if (typeof cur == "object") {
            cur = f(cur);
        }
        return acc + cur;
    });
}

function deepSort(arr, asc) {
    return arr.sort((a, b) => {        
        let nA = a;
        let nB = b;
        if (typeof a == "object") {
            deepSort(a, asc);
            nA = f(a);
        }
        if (typeof b == "object") {
            deepSort(b, asc);
            nB = f(b);
        }
        console.log("Fim nA", nA)
        console.log("Fim A", a)

        console.log("Fim nB", nB)
        console.log("Fim B", b)
        console.log("-----------------------");
        
        return  asc? nA - nB : nB - nA;
    });
}


// const array = [1,4,3,2];
const array1 = [1, [2, 3, [4, 5, [9, 11], 1, 8], 6], [20, 7, 8]];
// const arr3 = [2, 3, [4, 5, [11, 9], 1, 8], 6];
const arr4 = [[[11, 9], 1, 8], 6];
const as = true;

console.log(deepSort(array1, as));


console.log(f(arr4));
