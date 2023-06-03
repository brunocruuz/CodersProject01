const soma = function(num1,num2){
    return num1+num2
}

const imprimir = function(a,b, callback){
    console.log(callback(a,b))
}

imprimir(5,5,soma)