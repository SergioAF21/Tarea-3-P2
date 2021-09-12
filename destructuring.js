const datos = {
    imagen: 'https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2015/04/goku.jpg?resize=640%2C360&quality=80&ssl=1'
    //correo: 'malvarezc6c@unemi.edu.ec'
}
//console.log(datos)
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>
    `

//let x = mostrarDatos(datos)
const mostrarDatos1 = (avatar) => {
    const{imagen,correo} = avatar
    return(
        `
        <img src=${avatar.imagen} alt=${avatar.correo}/>
        `
    )
}
const mostrarDatos2 = ({imagen:img,correo}) => 
        `
        <img src=${img} alt=${correo}/>
        `


const $root = document.getElementById("root")
$root.innerHTML = "<h2>Destructuring</h2>"
$root.innerHTML = mostrarDatos2(datos)

