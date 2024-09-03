function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('verifique os dados e tente de novo')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    if(fsex[0].checked){
    genero = ''
    if(idade >= 0 && idade <10){
        //criança 
        img.setAttribute('src', 'img/criança.h.jpg')
    }
   if(idade < 21){
        //jovem
        img.setAttribute('src', 'img/jovem.h.jpg')}
    
    if(idade < 50){
        //adulto
        img.setAttribute('src', 'img/adulto.h.jpg')}
    
   else{
        //idoso
        img.setAttribute('src', 'img/idoso.h.jpg')}
    
    }
    
    else{
    
    if(idade >= 0 && idade <10){
        //criança
        img.setAttribute('src', 'img/criança.m.jpg')
    }
    if(idade < 21){
        //jovem
        img.setAttribute('src', 'img/jovem.m.jpg')
    }
    if(idade < 50){
        //adulto
        img.setAttribute('src', 'img/adulto.m.jpg')
    }
    else{
        //idoso
        img.setAttribute('src', 'img/idosa.m.jpg')
    }
}
}
  
    res.appendChild(img)
}