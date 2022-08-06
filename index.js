const txrg = "Carlos Pedro 012.345.123-14 15 Estudante";

const rgx =
  /^(?<Sobrenome>\w+)\s(?<Nome>\w+)\s(?<CPF>\d{3}.\d{3}.\d{3}-\d{2})\s(?<idade>\d{2})\s(?<ocupacao>\w+)/gm;

const matchAll = [...txrg.matchAll(rgx)]
  .map(
    ({ groups: { Nome, Sobrenome, CPF, idade, ocupacao } }) =>
      `Nome:${Nome} ${Sobrenome} - CPF:${CPF} - idade:${idade} - ocupação:${ocupacao}`
  )
  .join("\n");
console.log(`\n${matchAll}`);
