let botonComprado = () => {
    let element = document.getElementById("mybutton");

    if (element.textContent === "AGREGAR") {
       element.textContent = "BORRAR";
    } else {
       element.textContent = "AGREGAR";
    }
  }