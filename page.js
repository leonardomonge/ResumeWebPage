function mostrarinfo(elemento) {

    const seccion = elemento.getAttribute("data-seccion");
   
    const secciones = document.querySelectorAll(".formato, .formatoDos, .formatoTres, .formatoProject");
    secciones.forEach(div => div.style.display = "none");

    const divAMostrar = document.getElementById(seccion);
    if (divAMostrar) {
      divAMostrar.style.display = "block";
    }
    document.querySelector('.social-icons').style.display = "none";
  }

  function ocultarinfo() {
    const secciones = document.querySelectorAll(".formato, .formatoDos, .formatoTres, .formatoProject");
    secciones.forEach(div => div.style.display = "none");
    document.querySelector('.social-icons').style.display = "flex"; 
  }
