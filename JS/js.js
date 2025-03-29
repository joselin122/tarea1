document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnEnviar").addEventListener("click", function() {
        mostrarmenssaje();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
        cambiarcolor();
    });
});

function cambiarcolor()  {
   var Element  = document.getElementById ("contenedor")
    if ( document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "rgb(29, 136, 136)";
    Element.style.width="250px";
    Element.style.height="250px";

}
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.Color = "rgb(136, 155, 155)";
    document.body.style.backgroundColor = "black";
    Element.style.width="200px";
    Element.style.height="200px";
    Element.style.backgroundColor="blue";
}
}

function mostrarmenssaje() {
   
    // declaracion de variables
    var dato1;
    var dato2;
    // asignacion de id a las  variables
    dato1 = document.getElementById ("input1").value;
    dato2 = document.getElementById ("input2").value;
    // construir mensaje

    if ( dato1.trim === ' '|| dato2.trim === ' ')
        
        {
         alert("ingrese datos")
        }

        else
        {
            var mensaje = "los datos son" + " " + dato1 + " " + dato2;
            // mostrar mensaje
           document.getElementById("mensaje").innerText = mensaje;
        
        }
   

}