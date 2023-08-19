preguntas = document.querySelector("#preguntas");

console.log(preguntas);
preguntas.addEventListener("click", function (evento) {
    console.log("el evento:",evento);
    if(evento.target.tagName == "INPUT"){
        if (evento.target.id == "opcion1") {
            // si
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
              document.querySelector("#respuesta").textContent = ""
        }else if(evento.target.id == "opcion2"){
            // no
            Swal.fire(
                'Por favor',
                'En qué puedo mejorar?',
                'question'
              ).then(
                function (respuesta) {
                    
                    document.querySelector("#respuesta").textContent = "¿En qué tienes dudas?"
                }
              )
        }
        else{
            // vamos peleando
            Swal.fire(
                'Excelente!',
                'Vamos por buen camino!',
                'success'
              ).then(
                function (respuesta) {
                    
                    document.querySelector("#respuesta").textContent = "¿En qué tienes dudas?"
                }
              )
        }
    }
})
