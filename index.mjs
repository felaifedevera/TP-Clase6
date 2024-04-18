let eventoEjecutado = false;
var seleccion;

document.addEventListener('DOMContentLoaded', function() {




const crearLista = (elementos) => {
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


  
  const elementosNav = [
    { href: '#',id:'Tecnolgia', texto: 'Tecnologia' },
    { href: '#',id:'Deportes', texto: 'Deportes' },
    { href: '#',id:'Noticias', texto: 'Noticias' },
    { href: '#',id:'Ciencia', texto: 'Ciencia' },
  ];


  const nav = crearLista(elementosNav);
  document.querySelector('.contenedor').appendChild(nav);    
       const Deportes =document.getElementById('Deportes');

               const clickHandler = () =>{
                if (!eventoEjecutado) {
                console.log('hola');
                const ElementosEquipo = [
                    { href: '#',id:'Seleccion', texto: 'Seleccion' },
                    { href: '#',id:'Equipo', texto: 'Equipo' },
                    { href: '#',id:'Ligas', texto: 'Ligas' },
                  ];
                
                  const NavEquipo = crearLista(ElementosEquipo);
                  document.getElementsByClassName('contenedor2')[0].appendChild(NavEquipo);
                  document.getElementsByClassName('contenedor2')[0].appendChild(document.getElementsByClassName('contenedor3')[0]);
                  seleccion = document.getElementById("Seleccion");
                  loadSexondMenu();
                  eventoEjecutado = true;
                }  
                  

                
              };
            
              Deportes.addEventListener('click', clickHandler)


              const CrearCard = (datos) =>{

                var arr;
                arr = datos.map((el) => {
                  const Card = document.createElement('div');
                  Card.classList.add('card');
                
                  const Img = document.createElement('img');
                  Img.src = el.imagenURL;
                  Img.alt = el.tituloError;
                  Img.classList.add('IMG');
                  Card.appendChild(Img);
                
                  const ConteniDeDeCard = document.createElement('div');
                  ConteniDeDeCard.classList.add('contenido');
                
                  const parafo = document.createElement('p');
                  parafo.textContent = el.texto;
                  ConteniDeDeCard.appendChild(parafo);
                
                  Card.appendChild(ConteniDeDeCard);

                  return Card;
                });
                return arr;
              }

              const loadSexondMenu = () => {
                  seleccion.addEventListener('click', () => {
                    console.log('holaa');
    
                  const cards =[
                    { href: '#',id:'p1',imagenURL :'IMG/argentina.jpg',texto: 'Tecnologia', tituloError : 'No cargo la imagen' },
                    { href: '#',id:'p2',imagenURL :'IMG/francia.jpg', texto: 'Deportes', tituloError : 'No cargo la imagen' },
                    { href: '#',id:'p3',imagenURL :'IMG/belgica.webp',texto: 'Noticias', tituloError : 'No cargo la imagen' },
                  ];
                
                  const kard  = CrearCard(cards);
                  kard.forEach(el => {
                    document.querySelector('.contenedor3').appendChild(el);
                  })
    
                  });
              }



});


/*




*/



  




 