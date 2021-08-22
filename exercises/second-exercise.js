// Exercício 2

// Após atribuir os valores de A e B, utilizei da let C para passá-la o valor de A para que A possa receber o valor de B e, por fim, B recebendo o valor de A através de C.

let A = 19
let B = 23

let C = A
A = B
B = C

console.log(`O novo valor de A é ${A} e o novo valor de B é ${B}`)