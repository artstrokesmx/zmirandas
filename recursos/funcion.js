const menunav = document.querySelector('.menudenavegacion')
const cabecera = document.querySelector('.cabecera')
const bienvenida = document.querySelector('.bienvenida')
const saludos = document.querySelector('.saludos')
const footer = document.querySelector('footer')

menunav.innerHTML +=`<nav><ul> <li class="inactivo"><a href="./index.html">Inicio</a></li>   <li><a href="./lenceria.html">Lenceria</a></li> <li><a href="./danza.html">Danza</a></li> <li><a href="#elastano">Deportiva</a></li>  <li><a href="">Pijamas</a></li>    <li><a href="./trajesBaño.html">Traje de baño</a></li></ul></nav>`
cabecera.innerHTML += `<h1>Mir and Da</h1>`
footer.innerHTML += `<p>Mir & Da a tus órdenes</p><p>55245874 25</p>`


const titulo = document.createElement("h2")
const intro = document.createElement("p")

titulo.innerHTML += `Bienvenidos a nuestra tienda`
intro.innerHTML += `Porfavor, visita cada una de nustras secciones para que conozas bien nuestros productos.`

saludos.appendChild(titulo)
saludos.appendChild(intro)