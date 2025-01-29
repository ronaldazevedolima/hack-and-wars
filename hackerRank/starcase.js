
const f = (n) => {
    const e = " ";
    const a = "#";
    for (let i = 0; i < n; i +=1) {
        let result = "";
        for (let j = 1; j <= n; j += 1) {
            if (j < n - i ) {
                result += e;
            } else {
                result += a;
            }
        }
        console.log(result);
    }
};

f(6);
