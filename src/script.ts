import PromptSync = require ('prompt-sync')
const prompt = PromptSync()

const imc = (Weight: number, height: number) => { return Weight / (Math.pow(height, 2));
}

console.log('Qual seu peso? ')
const Weight = Number(prompt(`--> `));

console.log(`Qual sua altura: `)
const height = Number(prompt(`--> `));

const imResultado = imc(Weight, height)
console.log(`Seu IMC é ${imResultado}`)