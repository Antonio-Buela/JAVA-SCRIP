function tabuada(){
    var num = document.getElementById('contar')
   var tab= document.getElementById('seltab')

   if(num.value.length == 0){
    alert('por favor digite um numero')
   
   }
   else{
    var n = Number(num.value)
    var c = 1
    tab.innerHTML= ''
    while( c <= 12){
        var item = document.createElement('option')
        item.text = n 
        item.text +=  'x' +c
        item.text += '=' +n*c
        tab.appendChild(item)
        c++
    }
   }
}