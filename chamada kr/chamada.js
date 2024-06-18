const Namealunos = [
    "ANA CAROLINA PONTAROLO CARVALHO", 
    "ANA HELOISE MONTEIRO DA SILVA", 
    "ANA LUIZA DA SILVA NOGUEIRA", 
    "ANDRE CARDIN SOARES",
    "BEATRIZ BRANDT VIANA",
    "BHIANCA MULDENBERGER PINTO",
    "CAUÃ JUN KESHINO",
    "ELIÃ GABRIEL VIEIRA",
    "ENZO SAMUEL LISBOA ZORDENUNES",
    "GIOVANNA CALDEIRA",
    "HENRIQUE DUARTE DOS SANTOS",
    "BIRO JAMES",
    "IAGO DANIEL CALIXTO",
    "IASMIN APARECIDA DA SILVA PEREIRA",
    "ISADORA CRISTINA SILVEIRA",
    "JHENYFER GUIMARÃES DE LARA",
    "JOAO FRANCISCO KUJIV",
    "JOÃO HENRIQUE MORAIS DE ASSIS",
    "LORENZO HENRIQUE BENIN",
    "LUIZ FELIPE DO ROSARIO DE PAULA",
    "LUIZ GUSTAVO BRASIL",
    "MARIA JULIA AMORIM DA SILVA",
    "MARIA LUYZA MENDES DA SILVA LEAL",
    "PAOLA RAFAELA DOS SANTOS AMARAL",
    "PEDRO HENRIQUE LOPES DE LARA",
    "RENATO GABRIEL VIANA STRAUBE",
    "RICHARD CARRARO",
    "VICTOR DE PAULA",
    "VINICIUS BORTOLI",
    "WILLIAN NOVAES BITTENCOURT"
];
const Numberoalunos = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 55,
    13, 14, 15, 16,
    17, 18, 19, 21,
    22, 23, 24, 26,
    27, 28, 29, 30,  
    31, 32, 33
];

const nameIndex = Namealunos.indexOf("BIRO JAMES");
const numberIndex = Numberoalunos.indexOf(55);


if (nameIndex !== -1) {
    Namealunos.splice(nameIndex, 1); 
}
if (numberIndex !== -1) {
    Numberoalunos.splice(numberIndex, 1); 
}


if (nameIndex !== -1) {
    Namealunos.splice(nameIndex, 0, "HENRIQUE EMILIO SILVA KRUGER");
}
if (numberIndex !== -1) {
    Numberoalunos.splice(numberIndex, 0, 12);
}


const novaListaDeChamada = [];

for (let i = 0; i < Namealunos.length; i++) {
    novaListaDeChamada.push({
        numero: Numberoalunos[i],
        nome: Namealunos[i].split(' ').slice(0, 2).join(' ')
    });
}


novaListaDeChamada.forEach(aluno => console.log(`${aluno.numero}: ${aluno.nome}`));