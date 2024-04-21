import { crearLista} from '../componets/CrearListNav.mjs'; // Asegúrate de poner el nombre correcto del archivo
import { CrearCard } from '../componets/Crearcard.mjs';
import {ElementosEquipo,elementosNav,cardSeleccion,CardEquipo,CardLiga} from '../componets/Arrays.mjs';
import {borrarCard,borrarNav  } from '../services/utilidades.mjs';


document.addEventListener('DOMContentLoaded', function() {

const nav = crearLista(elementosNav);
document.querySelector('.contenedor').appendChild(nav);


let eventoEjecutado = false;
let seleccion,equipo,ligas;
let EventoCardSeleccion = false ;
let EventoCardEquipo = false ;
let EventoCardLigas =  false;

const Deportes =document.getElementById('Deportes');
const clickHandler = () =>{

    if (!eventoEjecutado) {

      const NavEquipo = crearLista(ElementosEquipo);
      document.getElementsByClassName('contenedor2')[0].appendChild(NavEquipo);
      document.getElementsByClassName('contenedor2')[0].appendChild(document.getElementsByClassName('contenedor3')[0]);
      seleccion = document.getElementById("Seleccion");
      equipo = document.getElementById("Equipo");
      ligas = document.getElementById("Ligas");

      loadSecondMenu();
      eventoEjecutado = true;
    }  
       
  };

  Deportes.addEventListener('click', clickHandler);


  
  

  const loadSecondMenu = () => {
                
    seleccion.addEventListener('click', () => {

    
          if (!EventoCardSeleccion){
                      borrarCard();
                      const kard  = CrearCard(cardSeleccion);
                      kard.forEach(el => { document.querySelector('.contenedor3').appendChild(el);});
  
                      EventoCardSeleccion = true;
                      EventoCardLigas = false;
                      EventoCardEquipo = false;
                    }
    });

    equipo.addEventListener('click',()=>{

     

      if (!EventoCardEquipo){
 borrarCard();
        const  kardEquipo= CrearCard(CardEquipo);
        kardEquipo.forEach(el=>{document.querySelector('.contenedor3').appendChild(el);});
        EventoCardEquipo = true;
        EventoCardLigas = false;
        EventoCardSeleccion = false;
      }
    });

    ligas.addEventListener('click',()=>{

   
    if (!EventoCardLigas){
       borrarCard();
const kardLigas = CrearCard(CardLiga);
kardLigas.forEach(el => {document.querySelector('.contenedor3').appendChild(el);});

EventoCardSeleccion = false;
EventoCardEquipo = false;
EventoCardLigas = true;

    }

      });




}


});
