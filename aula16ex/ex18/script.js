var num = document.querySelectorAll('input#inum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []


function nume(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inlista (n, 1){
    if(1.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}
    function adicionar(){
    if(nume(num.value) && !inlista(num.value)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = 'valor adicionado' num.value
        lista.appendChild(item)
    } else {
        alert('valor inválido ou já encontrado na linha ')
    }
    num.value= ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }
}