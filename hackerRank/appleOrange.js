// https://www.hackerrank.com/challenges/apple-and-orange/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s inicio da casa
 *  2. INTEGER t temino da casa
 *  3. INTEGER a posição da macieira
 *  4. INTEGER b posição da laranjeira
 *  5. INTEGER_ARRAY apples  posições de onde as maçãs cairam
 *  6. INTEGER_ARRAY oranges posições onde as laranjas cairam
 */

const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const contaA = apples.reduce((acc, cur) => {
        const posicao = a + cur;
        if (posicao >= s && posicao <= t) {
            acc += 1;
        }
        return acc;
    }, 0);
    const contaB = oranges.reduce((acc, cur) => {
        const posicao = b + cur;
        if (posicao <= t && posicao >= s) {
            acc += 1;
        }
        return acc;
    }, 0);

    console.log(contaA);
    console.log(contaB);
};

console.log(countApplesAndOranges(s,t,a,b,apples, oranges));
