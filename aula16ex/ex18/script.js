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
function list (n, 1){
    if(1.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}
function adicionar(){
    if(nume(num.value) && !list(num.value)){

    } else {
        alert('valor inválido ou já encontrado na linha ')
    }
}