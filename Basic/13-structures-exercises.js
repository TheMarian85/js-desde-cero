/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let animales = ['perro', 'gato', 'gallina', 'leon', 'tigre']
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.unshift('cebra')
animales.push('paloma')
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2,1)
console.log(animales)


// 4. Crea un set que almacene cinco libros

let libros = new Set(['Los pilares de la tierra', 'Cien años de soledad', 'El viejo y el mar', 'Crimen y castigo', 'Paranoia'])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add('Cien años de soledad')
libros.add('Festin de cuervos')
console.table(libros)


// 6. Elimina uno concreto a tu elección

libros.delete('Crimen y castigo')
console.table(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    ['1', 'enero'],
    ['2', 'febrero'],
    ['3', 'marzo'],
    ['4', 'abril'],
    ['5', 'mayo'],
    ['6', 'junio'],
    ['7', 'julio'],
    ['8', 'agosto'],
    ['9', 'setiembre'],
    ['10', 'octubre'],
    ['11', 'noviembre'],
    ['12', 'diciembre']
])

console.log(meses)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (meses.has("5")){
    console.log(meses.get("5"))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("verano", [meses.get("12"), meses.get("1"), meses.get("2")])
console.table(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = [2, 3, 5, 7, 11, 13, 17, 19]
let mySet = new Set(myArray)
console.log(mySet)

let myNewMap = new Map()
myNewMap.set('mapKey', myArray)
console.table(myNewMap)