// Exercício 1 - 

//A let 'result' pega a lista e faz uma varredura passando por cada valor dentro da lista e o dividindo por 2. Aqueles que ao divididos têm resultado igual a 0 são pares e os os que não, ímpares.

let lista = [1,2,3,4,5,6,7,8,9,10]

let result = lista.forEach(number => number % 2 === 0 ? console.log(`${number} é par`) : console.log(`${number} é ímpar`))

