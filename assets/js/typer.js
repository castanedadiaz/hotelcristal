const textElement = document.getElementById('texttype');
const text = textElement.textContent;
const speed = 100; // velocidad de escritura en milisegundos

let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();