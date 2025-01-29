const a = [20,1,40];
const b = [5,17,4];

const f = (a, b) => {
    const result = a.reduce((acc, cur, i) => {
        if (a[i] < b[i]) {acc[1] += 1}
        if (a[i] > b[i]) {acc[0] += 1}
        return acc;
    }, [0,0]);
    return result;
};

console.log(f(a,b));