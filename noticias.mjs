const CrearCard2 = (data) => {
    var array;
    array= data.((cont)) => {
        const cardNot = document.createElement('div')
        cardNot.classList.add('div-not');

        const IMGnot = document.createElement('img')
            IMGnot.src = cont.Imagen.jpg;
            IMGnot.alt = cont.ErrorCarga;
            cardNot.appendChild(IMGnot);

        const contCardNot = document.createElement('div')
        contCardNot.classList.add('noticias')

        const noticias = document.createElement('p')
        noticias.textContent = el.TextoNot
        contCardNot.appendChild(noticias);
        
        cardNot.appendChild(contCardNot);
        return cardNot;
    }
    
  }