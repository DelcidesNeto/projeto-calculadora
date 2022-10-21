var on_off = [true]
var historico = []
var tamanho = [0] //21


function ver_historico(){
    window.alert(`Histórico:\n${String(historico).replace(',', '\n')}`)
}


function limpar(){
    var n = window.document.querySelector('p')
    n.innerHTML = ''
    tamanho[0] = 0
}


function del(){
    var n = window.document.querySelector('p').innerHTML
    window.document.querySelector('p').innerHTML = n.substring(0, n.length-1)
    tamanho[0] = tamanho[0]-1
}


function inserir(v){
    var paragrafo = window.document.querySelector('p')
    if (on_off[0] == true){
        if (tamanho[0] < 21){
            paragrafo.innerHTML += v
            paragrafo.style.color = 'white'
            tamanho[0] = tamanho[0]+1
        }
    }else{
        paragrafo.innerHTML = ''
    }
}


function liga_desliga(){
    var botao = window.document.querySelector('input#power')
    var n = window.document.querySelector('p')
    if (on_off[0] == true){
        botao.value = 'OFF'
        botao.style.backgroundColor = 'red'
        on_off[0] = false
        n.innerHTML = ''
    }else{
        botao.value = 'ON'
        botao.style.backgroundColor = 'green'
        on_off[0] = true
    }
}


function conta(){
    if (on_off[0] == true){
        var n = window.document.querySelector('p')
        if (n.innerHTML.substring(n.innerHTML.length-1) == '+' || n.innerHTML.substring(n.innerHTML.length-1) == '-' || n.innerHTML.substring(n.innerHTML.length-1) == '÷' || n.innerHTML.substring(n.innerHTML.length-1) == 'x' || n.innerHTML.substring(n.innerHTML.length-1) == '.'){
            del()
        }else if (n.innerHTML.substring().indexOf('+') != -1 || n.innerHTML.substring().indexOf('-') != -1 || n.innerHTML.substring().indexOf('x') != -1 || n.innerHTML.substring().indexOf('÷') != -1){
            historico.push(`${n.innerHTML.substring()} = ${eval(n.innerHTML.substring().replace('x', '*').replace('÷', '/'))}`)
            var total = eval(n.innerHTML.substring().replace('x', '*').replace('÷', '/'))
            n.innerHTML = total
            tamanho[0] = 0
        }
    }
}
