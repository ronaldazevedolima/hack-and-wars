// https://www.hackerrank.com/challenges/utopian-tree/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign


function utopianTree(n) {
    if (n == 0) return 1;

    let tamanho = 1;

    for (let i = 0; i < n; i += 1) {
        if (i % 2 == 0) {
            tamanho *= 2
        } else {
            tamanho += 1
        }
    }
    return tamanho;
}

console.log(utopianTree(4));