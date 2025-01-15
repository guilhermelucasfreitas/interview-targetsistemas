let INDICE = 13,
  SOMA = 0,
  K = 0;
while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log('Valor de SOMA:', SOMA);

function isFibonacci(num: number): boolean {
  let a = 0,
    b = 1;
  while (b <= num) {
    if (b === num) return true;
    [a, b] = [b, a + b];
  }
  return num === 0;
}

const numToCheck = 21;
console.log(
  `O número ${numToCheck} pertence à sequência de Fibonacci?`,
  isFibonacci(numToCheck)
);

const faturamentoMensal = [
  { dia: 1, valor: 0 },
  { dia: 2, valor: 221.98 },
  { dia: 3, valor: 199.5 },
];

const valores = faturamentoMensal
  .filter((d) => d.valor > 0)
  .map((d) => d.valor);
const menorFaturamento = Math.min(...valores);
const maiorFaturamento = Math.max(...valores);
const mediaMensal =
  valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
const diasAcimaMedia = valores.filter((v) => v > mediaMensal).length;

console.log('Menor faturamento:', menorFaturamento);
console.log('Maior faturamento:', maiorFaturamento);
console.log('Dias acima da média:', diasAcimaMedia);

const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalMensal = Object.values(faturamentoEstados).reduce(
  (acc, curr) => acc + curr,
  0
);
const percentualPorEstado = Object.entries(faturamentoEstados).map(
  ([estado, valor]) => ({
    estado,
    percentual: ((valor / totalMensal) * 100).toFixed(2) + '%',
  })
);

console.log('Percentual por estado:', percentualPorEstado);

function reverseString(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const stringToReverse = 'TypeScript'; // Altere aqui para testar outras strings
console.log('String original:', stringToReverse);
console.log('String invertida:', reverseString(stringToReverse));
