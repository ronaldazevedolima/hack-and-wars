// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
    const a = string.split(" ");
    const result = a.map((e) => e.split("").join(separator));
    return result.join((" "));
}

console.log(splitAndMerge("My name is John","-"));
