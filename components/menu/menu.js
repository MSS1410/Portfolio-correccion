export function mostrarMenu(paginaActual, mostrarPagina) {
  // Creamos un contenedor para el menú (posicionado arriba, horizontal)
  const menuContainer = document.createElement('div')
  menuContainer.classList.add('menu-container')

  const menu = document.createElement('ul')
  menu.classList.add('menu')

  const paginas = ['Home', 'Projects', 'Info', 'Contact']
  paginas.forEach((pagina) => {
    const item = document.createElement('li')
    item.classList.add('itemlista')
    item.textContent = pagina
    item.addEventListener('click', () => mostrarPagina(pagina.toLowerCase()))

    if (pagina.toLowerCase() === paginaActual) {
      item.classList.add('select')
    }
    menu.appendChild(item)
  })

  menuContainer.appendChild(menu)
  return menuContainer
}

// Ejemplo de Home (por si lo usas en este mismo archivo):
export function mostrarHome(mostrarPagina) {
  const home = document.querySelector('#main')
  home.innerHTML = ''

  const titulo = document.createElement('h1')
  titulo.classList.add('titulo')
  titulo.textContent = 'KREMAS'

  const frase = document.createElement('h2')
  frase.classList.add('frase')
  frase.textContent = 'Designer and Developer Portfolio'

  home.appendChild(titulo)
  home.appendChild(frase)

  // Inyectamos el menú horizontal arriba
  const menu = mostrarMenu('home', mostrarPagina)
  home.appendChild(menu)
}
