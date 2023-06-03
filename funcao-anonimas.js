function ativar()
{ debugger
   let cliente = document.getElementById('cliente').value

   let cafe = parseFloat(document.getElementById('cafe').value)
   ,bombonscafe = parseFloat(document.getElementById('bombons-cafe').value)
   ,cupuacucafe = parseFloat(document.getElementById('cupuacu-cafe').value)
   ,chocolatecafe = parseFloat(document.getElementById('chocolate-cafe').value)
   , total ,r1 = document.getElementById('r1')
   


  total = (cafe*=13) + (bombonscafe *=23) + (cupuacucafe*=133) + (chocolatecafe*=83) 

   
    if(total<=500){
      total = total - (total * 0.05) 
      r1.innerText = `O valor total é: R$ ${total} , Desconto de 5%` 
      
    } if((total >=500.01) && (total<= 1500)){
        total = total - (total * 0.15)
        r1.innerText = `O valor total é: R$ ${total} , Desconto de 15%` 
      
    } if(total > 1500){
      total = total - (total * 0.20)
      r1.innerText =   `O valor total é: R$ ${total} , Desconto de 20%`
       
  }

  
}
