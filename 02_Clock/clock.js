const punteros = document.querySelectorAll('.hand');
    const segundero = document.querySelector('.second-hand');
    const minutero = document.querySelector('.min-hand');
    const horario = document.querySelector('.hour-hand');

    function setDate() {
      const actual = new Date();

      const segundos = actual.getSeconds();
      const gradosSegundos = ((segundos / 60) *360)+90;
      segundero.style.transform = `rotate(${gradosSegundos}deg)`;

      const mins = actual.getMinutes();
      const gradosMinutos = ((mins / 60) *360)+90;
      minutero.style.transform = `rotate(${gradosMinutos}deg)`;

      const horas = actual.getHours();
      const gradosHoras = ((horas / 12) *360)+90;
      horario.style.transform = `rotate(${gradosHoras}deg)`;

      // console.log("segundos", segundos);
      // console.log("punteros", punteros); 

      if (segundos === 59) {
        punteros.forEach( function(element, index) {
          element.style.transition = 'initial';
        });
      }
    }

    setInterval(setDate,1000);