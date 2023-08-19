function inrange(inputstr) {
    var num = parseInt(inputstr);
    //alert(num);
    if (Number.isNaN(num)) {
        //alert("Introduzca un valor entero");
        Swal.fire(
            'Por favor',
            'Introduzca un valor entero',
            'question'
          )
        
    }
    else {
        if (num >= 1 && num <= 30) {
            //alert("Esta dentro del rango");
            Swal.fire(
                'Excelente!',
                'Esta dentro del rango!',
                'success'
              )
        }
        else {
            Swal.fire(
                'Mal!',
                'Esta fuera del rango!',
                'error'
              )
        }
    }
}

let btnRango = document.querySelector("input[type='button']")
console.info(btnRango);
if (btnRango !== null) {
    btnRango.addEventListener("click", function () {
        let rango = document.querySelector("#rango").value
        swal.fire('Numero!',
        rango,
        'success').then(
            function (respuesta) {
                inrange(rango)
            }
        )
    })
}