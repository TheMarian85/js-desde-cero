/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(a=0, b=0){
    console.log(a+b)
}
sum(9,7)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayor(arrayNumber=[], res=0){
    for(let i = 0; i <= arrayNumber.length; i++){
        if ( arrayNumber[i] > arrayNumber[i-1]) res = arrayNumber[i]
    }
    return res
}

let array = [1, 5, 33, 88, 211, 4]
console.log(mayor(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let vocales = ['a', 'e', 'i', 'o', 'u', 'á','é','í','ó','ú']
let cadena = "Hola, ¿qué tal estás? Esto es una cadena de caracteres"
let contador = 0
function contadorCaraceteres(cadenaParametro) {
    for (let caracter of cadena.toLowerCase()){
        if (vocales.includes(caracter)) {
            contador ++
        }
    }
    return contador    
}
contadorCaraceteres(cadena)
console.log("La cantidad de vocales es: " + contador)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let arrayStrings = ["primer string", "segundo", "este es el tercero", "y por último el cuarto"]
let arrayStringsUpperCase = []
function toUpperCase(arrayParam){
    arrayParam.forEach(function(valor){
        arrayStringsUpperCase.push(valor.toUpperCase())
    })
    return arrayStringsUpperCase
}
console.log(toUpperCase(arrayStrings))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(x){
    if(x <= 3) return true
    if(x % 2 == 0) return false
    for(let i=3; i<=Math.sqrt(x); i+=2){       
        if(x % i == 0) return false
    }
    return true
    
}

console.log(numeroPrimo(357))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let firstArray = [2, 'hello', 'world', 38, 54, 7, '25']
let secondArray = [22, 'world', '38', 7, 16, 'a', 19]
function elements(a, b){
    let newArray = []
    if(a.length > b.length){
        a.forEach(function (value) {
            if(b.includes(value)) newArray.push(value)
        })
    } else {
        b.forEach(function (value) {
            if(a.includes(value)) newArray.push(value)
        })
    }
    return newArray
}

console.log(elements(firstArray, secondArray))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let arrayNumber2 = [2, 5, 78, 4, 9, 10, 25, 3, 2, 108]
let resultado = 0
function pares(arrayParam){
    for(let i=0; i<=arrayParam.length; i++){
        if(arrayParam[i] % 2 == 0) {
            resultado += arrayParam[i]
        } 
    }
    return resultado
}
console.log(pares(arrayNumber2))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let arrayNumber3 = [2, 4, 6, 8, 10]
let squaredArray = []
function squared (arrayParam) {
    arrayParam.forEach(function (value){
        squaredArray.push(Math.pow(value, 2))
    })
    return squaredArray
}

console.table(squared(arrayNumber3))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadena3 = "Hola, esto es otra cadena de texto"
function invertedWords(cadena) {
    let palabras = cadena.split(' ');
    cadena = palabras.reverse()
    cadena = cadena.join(' ')
    return cadena
}

console.log(invertedWords(cadena3))


// 10. Crea una función que calcule el factorial de un número dado

function factorial(n){
    for (let i = n; i>0; i--){
        if(i==n) continue
        else n *= i
    }
    return n
}

console.log(factorial(6))