// Exercício 3 -

// Iniciando a função definindo o array de números 0 e 1, a chamada do for é para cada vez a let i passar pelo array e seu valor for menor que o X, ele itera até chegar no resultado de acordo com as regras da série de Fibonacci representadas pela linha 8 do código.

let numbers = [0, 1]

const fibonacci = (x) => {
for (let i = numbers.length; i < x; i++){
    numbers[i] = numbers[i - 2] + numbers[i-1]
    }
    console.log(numbers)
}

fibonacci(9)