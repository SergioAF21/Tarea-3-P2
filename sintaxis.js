//variables primitivas
let nombre = null
//nombre ="Daniel"
let apellido = "Vera"
let edad = 52
let estado = true
// constantes
//arreglos
const numeros = [2,45,60,85,10]
// objetos
const articulo = {
    descripcion: 'Coca cola',
    precio: 2,
    stock: 1000
}
const notas = [
    { nombre:"Dan",
    promedio:100,
    parciales:[
        {primer:[25,35]},
        {segundo:[15,25]}
    ]
},
{nombre:"Yady",promedio:60,
parciales:[
    {primer:[15,15]},
    {segun:[15,15]}]
},
{nombre:"Erick",promedio:100,
parciales:[
    {primer:[25,25]},
    {segun:[25,25]}]
},
]
articulo.precio=30
articulo.estado=true
// console.log(notas[1])
// console.log(notas[1].nombre)
// console.log(notas[1].parciales)
// console.log(notas[1].parciales[1])
// console.log(notas[1].parciales[1].segundo)
// console.log(notas[1].parciales[1].segundo[1])

//console.log("Articulo",articulo,articulo.descripcion,articulo.precio)

//console.log(notas,notas[i],notas[i].nombre,notas[i].parciales,notas[i].promedio)

//
// if(condiciones)
// if(nombre)  
//    console.log("nombre: ",nombre,"edad",edad)
// else
//    console.log("No ha ingresado nombre",nombre)

// let resp = (nombre==underfined) ? "No se ha creado la variable":nombre
// console.log(resp)

dia = 2
switch (dia){
    case 1:
        console.log("Lunes")
        break

    case "2":
        console.log("Martes")
        break
    
    default :
        console.log("Dia no valido")
        break    
}

// let x=20
// let y=0
// try {
//     if (y==0)
//         throw("Division no permitida para cero")
//     let resp = x/y
//     console.log(resp)
// } catch (error) {
//     console.log("error con y=0", error)
// }

// const numeros = [2,45,60,85,10]
// let pos = 0
// while (pos < numeros.length && numeros[pos]!=85){
//     console.log(pos,"[",numeros[pos],"]")
//     pos += 1
// }
// console.log("Termino el while")

// for(let ind =0; ind < numeros.length;ind++){
//     console.log(ind,"[",numeros[ind],"]")
// }

// for(let ind = numeros.length-1;ind>=0;ind-=1){
//     console.log(ind,"[",numeros[ind],"]")
// }

function suma(){
    let n1 = 5
    let n2 = 20
    print(n1,"+",n2,"=",n1+n2)
}
const sumA = () => {
    let n1 = 5
    let n2 = 20
    console.log(`Suma:${n1}+${n2}=${n1+n2}`)
}

// suma()

function multiplicar(n1=1,n2=2){
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2
}
console.log(multiplicar(4,5))

const multiplicarA = (n1=1,n2=2) => {
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2
}
console.log(multiplicarA(4,5))

function resta(n1,n2){
    return n1-n2
}
const  restaA = (n1,n2) => n1-n2
    console.log(restaA(5,2))

function division(n1,n2){
    resp = n2 ? n1/n2 : 0
    return resp
}

const divisionA = (n1,n2) => n2 ? n1/n2 : 0

// console.log(division(6,4))
const arreglos = [2,45,60,85,10,20]
for(let ind =0; ind < arreglo.length;ind++){
    console.log(`${ind}[${arreglo[ind]}]` )
}
