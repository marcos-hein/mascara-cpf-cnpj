const fs = require('fs');

// Mascaras
function mascaraCpf(cpf) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

function mascaraCnpj(cnpj) {
  return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

// Lê o arquivo dados.txt com cpf
const dados = fs.readFileSync('./dados.txt', 'utf-8')

// Aplica masacaras
const resultado = dados.split(/\r?\n/).map(d => {
  if(d.length > 11) {
    return mascaraCnpj(d.toString())
  }

  return mascaraCpf(d.toString())
})

// Concatena as linhas dos dados sanitizados
let text = ''
resultado.forEach(t => text = text + t + '\n')

// Escreve arquivo
fs.writeFileSync('nome-do-arquivo.txt', text)