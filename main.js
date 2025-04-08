import './style.css'
// menu
import './components/menu/menu.css'
import { mostrarMenu } from './components/menu/menu.js'
//projects
import './components/projects/project.css'
import { mostrarProjects } from './components/projects/project.js'
//info
import './components/info/info.js'
import { mostrarInfo } from './components/info/info.js'
//contact
import './components/contact/contact.js'
import { mostrarContact } from './components/contact/contact.js'

import { data } from './data/data.js'

const home = document.querySelector('#main')
// funcion para camviar de pag

function mostrarPagina(pagina) {
  console.log('Cambiando a la página:', pagina)

  home.innerHTML = ''
  if (pagina === 'projects') {
    console.log('Cargando página de proyectos')
    mostrarProjects(mostrarPagina)
  } else if (pagina === 'info') {
    mostrarInfo(mostrarPagina)
  } else if (pagina === 'home') {
    crearHome(mostrarPagina)
  } else if (pagina === 'contact') {
    mostrarContact(mostrarPagina)
  }
}

// funcion para el home page

function crearHome() {
  home.innerHTML = ''

  // const fondo = document.createElement('div')
  // fondo.classList.add('fondopantalla')
  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = data.name

  const descripcion = document.createElement('h2')
  descripcion.classList.add('descri')
  descripcion.textContent = data.description

  const frase = document.createElement('p')

  frase.textContent = ' Ignore Emotions, Create Thoughts. '
  frase.classList.add('frase')

  // home.appendChild(fondo)
  home.appendChild(titulo)
  home.appendChild(descripcion)
  home.appendChild(mostrarMenu('home', mostrarPagina))

  home.appendChild(frase)
}

crearHome()
