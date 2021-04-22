/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagNome()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Sletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '15%'
email.style.width = '15%'
assunto.style.width = '15%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){

    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){

    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function validaEnvio(){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar ...')
    }
}

function mapaZoom(){
    mapa.width = '600px'
    mapa.height = '500px'
}

function mapaNormal(){
    mapa.width = '300px'
    mapa.height = '225px'
}