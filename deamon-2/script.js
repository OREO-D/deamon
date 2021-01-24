// get to document
const cpf = document.getElementById("cpf")
const cnpj = document.getElementById("cnpj")
const cep = document.getElementById("cep")
const dias_tag = document.getElementById("dia")

dia = 'Infinite'

// redirects
cpf.addEventListener('click', ()=> {
    open('cpf/index.html')
})
cnpj.addEventListener('click', ()=> {
    open('cnpj/index.html')
})
cep.addEventListener('click', ()=> {
    open('cep/index.html')
})
// dia
dias_tag.innerHTML = `<dia style="color: white;" id="dia">${dia}</dia>`