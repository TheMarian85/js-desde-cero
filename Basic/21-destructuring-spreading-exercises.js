/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [12, 'hello', 'world', 34, 17]
let [firstElement, secondElement] = myArray
console.log(firstElement, secondElement)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [, , anotherElement, , , anotherOne = 'hello'] = myArray
console.log(anotherElement, anotherOne)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let myObject = {
    myName : "Mariano",
    myAge : "39",
    myMail: "mariano.koci@gmail.com"
}

let {myName, myMail} = myObject
console.log(myName, myMail)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let myObject2 = {
    jobName : "Developer",
    place : "Udelar",
    jobMail: "mariano.koci@seciu.edu.uy"
}

let {jobName : miTrabajo, place : lugarTrabajo} = myObject2
console.log(miTrabajo, lugarTrabajo)


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let myObject3 = {
    myName : "Mariano",
    myAge : "39",
    myMail: "mariano.koci@gmail.com",
    work: {
        jobName : "Developer",
        place : "Udelar",
        jobMail: "mariano.koci@seciu.edu.uy"
    }
}

let {work : {jobName: trabajo, jobMail:correo} } = myObject3
console.log(trabajo, correo)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let firstArray = [1, 2, 3, 5, 8]
let secondArray = [4, 6, 7, 9, 10]
let combinedArray = [...firstArray, ...secondArray]
console.log(combinedArray)

// 7. Usa propagación para crear una copia de un array

let myArray2 = [3, 5, 8, 9, 1]
let copiedArray = [...myArray2]
console.log(copiedArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let myObject4 = {
    myName : "Mariano",
    myAge : "39",
    myMail: "mariano.koci@gmail.com"
}

let myObject5 = {
    jobName : "Developer",
    place : "Udelar",
    jobMail: "mariano.koci@seciu.edu.uy"
}

let myCombinedObjects = {
    ...myObject4,
    ...myObject5
}
console.log(myCombinedObjects)

// 9. Usa propagación para crear una copia de un objeto

let myNewObject = {
    ...myCombinedObjects
}
console.log(myNewObject)

// 10. Combina desestructuración y propagación

let { work : {jobName : trabajo2, place : lugar, jobMail: correoTrabajo}, ...resto } = myObject3
console.log(resto, trabajo2, lugar, correoTrabajo)