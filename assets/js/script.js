let nome = window.document.getElementById ('nome')
let email = document.querySelector('#txtEmail')
let assunto = document.querySelector('#txtAssunto')
let nomeOk = false
let emailOk= false
let assuntoOk = false
let mapa = document.querySelector ('#mapa')

nome.style.width= '100%'
email.style.width="100%"

function validaNome () {
let txtNome =document.querySelector('#txtNome')
 if(nome.value.lenght <= 2) {
     txtNome.innerHTML="Nome inválido";
     txtNome.style.color = "red";
 }else{
     txtNome.innerHTML="Nome Válido";
     txtNome.style.color= 'green';
     let nomeOk = true
 }
}
function validaEmail(){
 let txtEmail= document.querySelector('#txtEmail')

 if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color= 'red'
 }else{
    txtEmail.innerHTML="E-mail Válido"
    txtEmail.style.color= 'green'
    let emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.lenght >= 100){
        txtAssunto.innerHTML= 'Texto muito grande, Digite no máximo 100 caracteres'
        txtAssunto.style.color= 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        let assuntoOk = true

    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
function zoom(){
 mapa.style.width= '800px'
 mapa.style.height= '600px'
}
function normal(){
    mapa.style.width= '400px'
    mapa.style.height= '250px'
}