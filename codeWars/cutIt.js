// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

const a = [ 'zab', 'defsss', 'ghai', 'ed' ];

const func = (arr) => {
    const maior = arr.reduce((acc, cur) => {
        if( cur.length < acc.length) {
            return cur;
        }
        return acc;
    });

    const result = arr.map((e) => e.slice(0, maior.length));
    return result;
};
const er = a.sort((a,b) => a.length - b.length).map((e) => e.slice(0, a[0].length));
console.log(er);
console.log(func(a));
