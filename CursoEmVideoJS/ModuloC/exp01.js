var button = window.document.getElementById('changeGreeting')
var greet = window.document.getElementById('greeting')
button.onclick = function(){
    greet.innerHTML = "Mundo"
}

var input01 = document.getElementById('input01')
var submit = document.getElementById('submit')
submit.onclick = function(){
    window.alert(input01.value)
}

var result = document.getElementById('result')
var sum = document.getElementById('sum')
sum.onclick = function(){
    var num1 = Number(document.getElementsByName("nums")[0].value)
    var num2 = Number(document.getElementsByName("nums")[1].value)
    var res = num1 + num2
    result.innerHTML = res
}

let red = document.getElementsByName('botoesCor')[0]
let green = document.getElementsByName('botoesCor')[1]
let blue = document.getElementsByName('botoesCor')[2]
red.onclick = function(){
    document.body.style.backgroundColor = "red"
}
green.onclick = function(){
    document.body.style.backgroundColor = "green"
}
blue.onclick = function(){
    document.body.style.backgroundColor = "blue"
}

let clickButton = document.getElementById('counter')
var clicks = document.getElementById("numClicks")
var numclick = 0
clickButton.onclick = function(){
    numclick += 1
    clicks.innerHTML = numclick
}

let someTexto = document.getElementById('someTexto')
let someButton = document.getElementById('someTextoButton')
someButton.onclick = function(){
    someTexto.style.display = "none"
}

let imcButton = document.getElementById('imcButton')
imcButton.onclick = function(){
    let altura = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let result = document.getElementById('imcResult')
    var imc = peso / (altura * altura)
    result.innerHTML = imc.toFixed(2)
}

let jerboaimg1 = document.getElementsByName('jerboaPic')[0]
let jerboaimg2 = document.getElementsByName('jerboaPic')[1]
let jerboaButton = document.getElementById('trocaJerboa')
jerboaButton.onclick = function(){
    if(jerboaimg1.style.display == "none"){
        jerboaimg1.style.display = "block"
        jerboaimg2.style.display = "none"
    } else{
        jerboaimg2.style.display = "block"
        jerboaimg1.style.display = "none"
    }
}

let valid = document.getElementById('valid')
let buttonValid = document.getElementById('submitValid')
let erro = document.getElementById('erro')

buttonValid.onclick = function(){
    if(valid.value == ""){
        erro.innerHTML = "Erro: preencha todos os campos!"
    }
    else{
        erro.innerHTML = "Valido!"
    }
}

let submitLista = document.getElementById('submitLista')
let lista = document.getElementById('lista')

submitLista.onclick = function(){
    let item = document.createElement('li')
    item.innerHTML = document.getElementById('listaInput').value
    lista.appendChild(item)
}