// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

const k = 7;
const height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
    const maior = Math.max(...height);
    return maior - k <= 0 ? 0 : maior - k;

}

console.log(hurdleRace(k, height));
