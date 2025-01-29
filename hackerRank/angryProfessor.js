// https://www.hackerrank.com/challenges/angry-professor/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function angryProfessor(k, a) {
   const on = a.reduce((acc, cur) => {
    if (cur <= 0) {
        acc += 1;
        return acc;
    }
    return acc;
   }, 0)

   return on >= k ? "YES" : "NO";
};
