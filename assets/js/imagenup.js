function imagenUp(src){
    var imagenAmpliada = document.getElementById("imagenAmpliada");
    imagenAmpliada.innerHTML ='<img src="' + src + '">';
    imagenAmpliada.style.display = "block";
}

function imagenDown (){
    var imagenDisminuida = document.getElementById("imagenAmpliada");
    imagenDisminuida.style.display = "none";
}

