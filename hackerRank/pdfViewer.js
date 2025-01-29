// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

const z = "z";
const a = "a";

console.log(z.charCodeAt(0) - a.charCodeAt(0))
console.log(a.charCodeAt(0))

const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word1 = "abc";


function designerPdfViewer(h, word) {
    let maior = 0;
    const vA = 97;
    for (let i = 0; i < word.length; i +=1) {
        const v = word.charCodeAt(i);
        maior > h[v - vA] ? maior : maior = h[v - vA];
    }

    return maior * word.length;
}

console.log(designerPdfViewer(h, word1));
