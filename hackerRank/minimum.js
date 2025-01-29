const f = (arr) => {
    arr.sort();
    const m = [...arr];
    const mx = [...arr];
    m.pop();
    mx.shift();
    const mim = m.reduce((acc, cur) => acc + cur);
    const max = mx.reduce((acc, cur) => acc + cur);
    console.log(mim, max);
    
}

const a = [1,2,3,4,5,6];
f(a);