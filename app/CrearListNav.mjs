

export const crearLista = (elementos) => {
    const ul = document.createElement('ul');
    ul.classList.add('nav-bar');
  
    elementos.forEach(elemento => {
      const li = document.createElement('li');
      li.classList.add('TituloNav');
      li.id = elemento.id;
      
  
      const a = document.createElement('a');
      a.href = elemento.href;
      a.textContent = elemento.texto;
  
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    return ul;
  };
 export const ElementosEquipo = [
    { href: '#',id:'Seleccion', texto: 'Seleccion' },
    { href: '#',id:'Equipo', texto: 'Equipo' },
    { href: '#',id:'Ligas', texto: 'Ligas' },
  ];


  
  export const elementosNav = [
    { href: '#',id:'Tecnolgia', texto: 'Tecnologia' },
    { href: '#',id:'Deportes', texto: 'Deportes' },
    { href: '#',id:'Noticias', texto: 'Noticias' },
    { href: '#',id:'Ciencia', texto: 'Ciencia' },
  ];

 
