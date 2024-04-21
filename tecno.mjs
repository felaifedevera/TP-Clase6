const nav = crearLista(elementosNav);
  document.querySelector('.contenedor').appendChild(nav);    
       const Tecnolgia =document.getElementById('Tecnolgia');

               const clickHandler = () =>{
                if (!eventoEjecutado) {
                console.log('Se dio click a la seccion de tecnologia');
                const ElementosTecno = [
                    { href: '#',id:'android', texto: 'android' },
                    { href: '#',id:'ios', texto: 'ios' },
                    { href: '#',id:'symbiam', texto: 'symbiam' },
                  ];
                
                  const NavAndroid = crearLista(ElementosTecno);
                  document.getElementsByClassName('contenedor2')[0].appendChild(NavAndroid);
                  document.getElementsByClassName('contenedor2')[0].appendChild(document.getElementsByClassName('contenedor3')[0]);
                  android = document.getElementById("android");
                  loadSecondMenu();
                  eventoEjecutado = true;
                }  
                  

                
              };
            
              Tecnolgia.addEventListener('click', clickHandler)
              const loadSecondMenu = () => 
                android.addEventListener('click', () => {
                  console.log('se cargo andorid');
                  const fotoAndroid=[
                  { href: '#',id:'android',imagenURL :'IMG/ANDROID.jpeg',texto: 'Android es el sistema operativo que utilizan algunos dispositivos móviles para poder funcionar. Es decir, se trata de todo aquello que puedes ver y con lo que puedes interactuar desde la pantalla de tu equipo."', tituloError : 'No cargo la imagen' },

               ] 
               fotoAndroid=Document.getElementById("android");
                    })
