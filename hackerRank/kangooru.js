// https://www.hackerrank.com/challenges/kangaroo/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1 posição inicial k1
 *  2. INTEGER v1 tamanho do salto do k1
 *  3. INTEGER x2 posição inicial k2
 *  4. INTEGER v2 tamaho salto k2
 */

// 2564 5393 5121 2836
const x1 = 2564;
const v1 = 5393;
const x2 = 5121;
const v2 = 2836;

function kangaroo(x1, v1, x2, v2) {
    if ((x1 == x2 && v1 == v2) | (x1 + v1 == x2 +  v2)) return 'YES';
    const maior = v1 > v2 ? [x1,v1] : [x2,v2];
    const menor = v2 < v1 ? [x2,v2] : [x1,v1];

    while ((maior[0] + maior[1]) < menor[0] + menor[1]) {
        maior[0] += maior[1];
        menor[0] += menor[1];
        if ((maior[0] + maior[1]) == (menor[0] + menor[1])) {
            return 'YES';
        }
    }

    return 'NO';
}

console.log(kangaroo(x1, v1, x2, v2));