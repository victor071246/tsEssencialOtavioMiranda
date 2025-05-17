// const objetoA: {
//   chaveA: string;
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Nova chave';
// objetoA.chaveD = 'Nova chave';

const objetoA: {
  readonly chaveA: string;
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);
