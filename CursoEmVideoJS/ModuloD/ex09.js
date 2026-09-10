function país(){
    var respais = document.getElementById('país')
    var res = document.getElementById('res')

    if (respais.value == 'Brasil'){
        res.innerHTML = 'Você é Brasileiro!'
    }
    else{
        res.innerHTML = 'Você é Estrangeiro!'
    }
}