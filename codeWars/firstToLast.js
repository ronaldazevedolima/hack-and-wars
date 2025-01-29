//  https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

function firstToLast(str,c){
    const p = str.indexOf(c);
    const u = str.lastIndexOf(c);
    if (p === -1 || u === -1) return -1
    return u - p;    
};

console.log(firstToLast('ababc', "a"));
