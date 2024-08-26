/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i<=20; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let numero =1
for (let i = 1; i <= 100; i++){
    numero += i
}
console.log(numero)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 1; i <= 50; i++){
    if(i % 2 == 0) console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let arrayNombres = ['Juan', 'Pedro', 'Mariano', 'Agustin', 'Diego']
for (let nombre of arrayNombres){
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocales = ['a', 'e', 'i', 'o', 'u', 'á','é','í','ó','ú']
let cadena = "Hola, ¿qué tal estás? Esto es una cadena de caracteres"
let contador = 0
for (let caracter of cadena.toLowerCase()){
    if (vocales.includes(caracter)) {
        contador ++
    }
}
console.log("La cantidad de vocales es: " + contador)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numberArray = [2, 4, 6, 7, 9, 11, 14]
let res = 0
for(let i=0; i<numberArray.length; i++){
    if(i==0) res = numberArray[i]
    else res *= numberArray[i]   
}
console.log(`El resultado es ${res}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for(let i=1; i<=10; i++){
    
    console.log(i + ' * 5 = ' + i*5 )
}

// 8. Usa un bucle para invertir una cadena de texto

let cadena2 = "Dabale arroz a la zorra el abad"
let cadenaInvertida = ""
for (let i = cadena2.length-1; i>=0; i--){
    cadenaInvertida += cadena2[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let arrayFibonacci = []
for (let i = 0; i<10; i++){
    if(i==0 || i==1) arrayFibonacci.push(i)
    else arrayFibonacci.push(arrayFibonacci[i-2]+arrayFibonacci[i-1])
    console.log(arrayFibonacci[i])
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let primerArray = [18, 7, 6, 22, 134, 11, 14, 5, 3, 9, 33]
let arrayMayores = new Array
for (numero of primerArray){
    if (numero > 10) arrayMayores.push(numero)
}
console.table(arrayMayores)