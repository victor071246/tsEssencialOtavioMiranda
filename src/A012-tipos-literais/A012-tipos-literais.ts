let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));

//Module mode
export default 1;
