function mostrarinfo(elemento) {

    const seccion = elemento.getAttribute("data-seccion");
   
    const secciones = document.querySelectorAll(".formatoProject, .formatoSkills, .formatoPersonalInfo, .formatoEducacion, .formatoExperience");
    secciones.forEach(div => div.style.display = "none");

    const divAMostrar = document.getElementById(seccion);
    if (divAMostrar) {
      divAMostrar.style.display = "block";
    }
    document.querySelector('.social-icons').style.display = "none";
    document.querySelector('.divLeoPersonal').style.display = "none";
    document.querySelector('.divDescripcion').style.display = "none";
  }

  function ocultarinfo() {
    const secciones = document.querySelectorAll(".formatoProject, .formatoSkills, .formatoPersonalInfo , .formatoEducacion, .formatoExperience");
    secciones.forEach(div => div.style.display = "none");
    document.querySelector('.social-icons').style.display = "flex"; 
    document.querySelector('.divLeoPersonal').style.display = "block"; 
    document.querySelector('.divDescripcion').style.display = "flex"; 
  }
