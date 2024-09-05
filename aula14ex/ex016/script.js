function contar(){
    var ini = document.getElementById('txt1')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('faltam dados')
    }
    else{
        res.innerHTML = 'contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido')
            p = 1
        }
        if(i < f){
             for(var c = i ; c <= f ; c += p){
            res.innerHTML +=  c
        }
        } else{
            for(var c = i; c > f; c -= p){
                res.innerHTML= c
            }
        }
       

    }
}