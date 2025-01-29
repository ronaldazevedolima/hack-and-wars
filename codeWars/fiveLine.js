// https://www.codewars.com/kata/5729b103dd8bac11a900119e/javascript

function fiveLine(s){
    const nS = s.trim()
    return `${nS}
    ${nS}${nS}
    ${nS}${nS}${nS}
    ${nS}${nS}${nS}${nS}
    ${nS}${nS}${nS}${nS}${nS}`;    
  };

console.log(fiveLine("  s"));
