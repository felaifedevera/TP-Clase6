 // Eliminar las cartas de selección
 export const borrarCard = () => {
 document.querySelectorAll('.contenedor3 .card').forEach(card => {
    card.remove();
  });
 }

 export const borrarNav = () => {
    document.querySelectorAll ('.contenedor2 .nav-bar').forEach(nav => {

        nav.remove();
    })

 }