const h = '12:35:46AM';

const f = (s) => {
  const periodo = s[s.length - 2];
  const hora = s.split(':');
  if (hora[0] === '12') {
    hora[0] = '00';
  }
  hora[0] = periodo === 'P' ? +hora[0] + 12 : hora[0];

  const result = hora.join(':').slice(0, 8);
  return result;
};

console.log(f(h));