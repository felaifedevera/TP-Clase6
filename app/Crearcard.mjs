export const CrearCard = (datos) =>{

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