const ar = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 999, 1000, 1000, 1000, 1000, 1000, 1000, 1000];
const f = (arr) => {
    // sort sem parametro não funciona pra esse sort!!!!!!
    arr.sort((a,b) => a - b);
    const max = arr[arr.length -1];
    console.log(max);
    const result = arr.filter((e) => e == max);
    return result.length;
};

console.log(f(ar));
