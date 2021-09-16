const fs = require('fs');

// Lê o arquivo dados.txt com cpf
const dados = fs.readFileSync('./dados.txt', 'utf-8')

// Aplica masacaras
const resultado = dados.split(/\r?\n/).map(d => {
  return `or cpfcnpj = '${d}'`
})

// Concatena as linhas dos dados sanitizados
let text = ''
resultado.forEach(t => text = text + t + '\n')

// Escreve arquivo
fs.writeFileSync('nome-arquivo.txt', text)