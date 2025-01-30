//  https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */


const ranked = [100, 90, 90, 80];
const player = [60,70, 80, 105];

function climbingLeaderboard(ranked, player) {
    const resultado = [];
    const setRank = [...new Set(ranked)];
    let j = setRank.length - 1;

    player.forEach((ponto) => {
        while (j >= 0 && ponto >= setRank[j]) {
            j -= 1;
        }
        resultado.push(j + 2);
    });

    return resultado;
}


// function climbingLeaderboard(ranked, player) {
//     const resultado = [];
//     player.forEach((ponto) => {
//         const tabelaaux = [ponto, ...(new Set(ranked))];
//         tabelaaux.sort((a, b) => b - a);
//         const index = tabelaaux.indexOf(ponto);
//         resultado.push(index + 1);
//     });
//     return resultado;
// }

console.log(climbingLeaderboard(ranked, player));
