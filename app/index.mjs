import { crearLista, elementosNav ,ElementosEquipo} from './CrearListNav.mjs'; // Asegúrate de poner el nombre correcto del archivo

import { CrearCard } from './Crearcard.mjs';


document.addEventListener('DOMContentLoaded', function() {

const nav = crearLista(elementosNav);
document.querySelector('.contenedor').appendChild(nav);


let eventoEjecutado = false;
var seleccion;
let eventocard = false ;

const Deportes =document.getElementById('Deportes');
const clickHandler = () =>{
    if (!eventoEjecutado) {

    
    
      const NavEquipo = crearLista(ElementosEquipo);
      document.getElementsByClassName('contenedor2')[0].appendChild(NavEquipo);
      document.getElementsByClassName('contenedor2')[0].appendChild(document.getElementsByClassName('contenedor3')[0]);
      seleccion = document.getElementById("Seleccion");
      loadSecondMenu();
      eventoEjecutado = true;
    }  
      

    
  };

  Deportes.addEventListener('click', clickHandler)


  const loadSecondMenu = () => {
                
    seleccion.addEventListener('click', () => {
      console.log('holaa');
          if (!eventocard){
                      const cards =[
                        { href: '#',id:'p1',imagenURL :'IMG/argentina.jpg',texto: 'Argentina lidera el ranking fifa por su desempeño en los ultimos años siendo campeon del mundial en qatar 2022, campon de america y campeon de la finalizima ante italia teniendo un total de 1858 pts"', tituloError : 'No cargo la imagen' },
                        { href: '#',id:'p2',imagenURL :'IMG/francia.jpg', texto: 'Francia es la segunda seleccion mejor rankeada en el ranking fifa dado a el subcampeonato mundial 2022, campeon 2018 teniendo 1840.59 pts', tituloError : 'No cargo la imagen' },
                        { href: '#',id:'p3',imagenURL :'IMG/belgica.webp',texto: 'Belgica se queda con el tercer puesto dado que siempre clasifica a los grandes torneos teniendo un invicto de cinco años en su estadio 8 victorias y cinco empates teniendo asi 1795.23 pts en ranking fifa', tituloError : 'No cargo la imagen' },
                      ];
                    
                      const kard  = CrearCard(cards);
                      kard.forEach(el => { document.querySelector('.contenedor3').appendChild(el);});
  
                      eventocard = true;
                    }

    });
}

});
