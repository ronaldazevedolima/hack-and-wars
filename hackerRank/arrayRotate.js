// https://www.hackerrank.com/challenges/circular-array-rotation/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign


const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const k = 17;
const query = [ 0, 1, 2 ];


function circularArrayRotation(a, k, queries) {
    const aux = [];
    const ta = a.length;
    const uI = ta - 1;
    let cont = 0;
    let nk = k;
    if (k % ta == 0) {
        return queries.map((e) => a[e]);
    }

    while (nk > ta) {
        nk -= ta;
    }
    for(let i = 0; i < ta; i += 1) {
        if (i + nk <= uI) {
            aux[i + nk] = a[i];
        } else {
            aux[cont] = a[i];
            cont += 1;
        }
    }
  return queries.map((e) => aux[e]);
};

circularArrayRotation(a, k, query);
