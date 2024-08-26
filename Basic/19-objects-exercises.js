/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let myObject = {
    myName : "Mariano",
    myAge : "39",
    myMail: "mariano.koci@gmail.com"
}

// 2. Accede y muestra su valor

console.log(`Mi nombre es: ${myObject.myName}`)
console.log(`Mi edad es: ${myObject.myAge}`)
console.log(`Mi email es: ${myObject.myMail}`)

// 3. Agrega una nueva propiedad

myObject.job = 'Developer'
console.table(myObject)

// 4. Elimina una de las 3 primeras propiedades

delete myObject.myAge
console.table(myObject)

// 5. Agrega una función e invócala

myObject.showMessage = function(){
    console.log('Esta es una función dentro de un objeto')
}
myObject.showMessage()


// 6. Itera las propiedades del objeto

for (let key in myObject) {
    console.log(key + ": " + myObject[key])
}

// 7. Crea un objeto anidado

myObject.work = {
    jobName : 'Developer',
    place : 'Udelar'
}

console.table(myObject)
console.table(myObject.work)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(myObject.work.jobName)
console.log(myObject.work.place)

// 9. Comprueba si los dos objetos creados son iguales

console.log(myObject === myObject.job ? 'Los objetos son iguales' : 'Los objetos son distintos')

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(myObject.job === myObject.work.jobName ? 'Las propiedades son iguales' : 'Las propiedades son distintas')
