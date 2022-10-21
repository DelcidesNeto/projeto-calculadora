var on_off = [true]
var historico = []
var tamanho = []


function ver_historico(){
    window.alert(`Histórico:\n${String(historico).replace(',', '\n')}`)
}


function limpar(){
    var n = window.document.querySelector('p')
    n.innerHTML = ''
}


function del(){
    var n = window.document.querySelector('p').innerHTML
    window.document.querySelector('p').innerHTML = n.substring(0, n.length-1)
}


function inserir(v){
    var paragrafo = window.document.querySelector('p')
    if (on_off[0] == true){
        paragrafo.innerHTML += v
        paragrafo.style.color = 'white'
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
        }else{
            if (n.innerHTML.substring().indexOf('+') != -1 || n.innerHTML.substring().indexOf('-') != -1 || n.innerHTML.substring().indexOf('x') != -1 || n.innerHTML.substring().indexOf('÷') != -1){
                historico.push(`${n.innerHTML.substring()} = ${eval(n.innerHTML.substring().replace('x', '*').replace('÷', '/'))}`)
                var total = eval(n.innerHTML.substring().replace('x', '*').replace('÷', '/'))
                n.innerHTML = total
            }
        }
    }
}
