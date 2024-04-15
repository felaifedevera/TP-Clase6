
const crearLista = (elementos) => {
    const ul = document.createElement('ul');
    ul.classList.add('nav-bar');
  
    elementos.forEach(elemento => {
      const li = document.createElement('li');
      li.classList.add('TituloNav');
  
      const a = document.createElement('a');
      a.href = elemento.href;
      a.textContent = elemento.texto;
  
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    return ul;
  };
  
  const elementosNav = [
    { href: '#', texto: 'Acerca de' },
    { href: '#', texto: 'Servicios' },
    { href: '#', texto: 'Informacion' },
    { href: '#', texto: 'biografia' },
    {href:'#',texto:'hola'}
  ];
  
  const nav = crearLista(elementosNav);
  document.querySelector('.contenedor').appendChild(nav);