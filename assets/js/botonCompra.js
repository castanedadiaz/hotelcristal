let botonCompra = () => {
    let element = document.getElementById("mybuttonok");

    if (element.style.backgroundColor === "white") {
       element.style.backgroundColor = "#3630a3"
       element.textContent = "AGREGADO "
       element.style.color = "white" ;
    } else {
       element.style.backgroundColor = "white"
       element.textContent = "CARRO VACIO"
       element.style.color = "black";
    }
  }

