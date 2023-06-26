// Parte 1


    // No puedo hacer que el borde quede en toda la Imagen, al tener esta un padding bottom el borde bordea eso también. 

const foto = document.getElementById("cumple");
let border=false;

foto.addEventListener("click", (event)=>{
    if (!border){
        foto.style.border = "solid 2px red"
        border=true;
    }else{
        foto.style.border = "";
        border=false;
    }
});




// Parte 2

let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let aviso = document.querySelector('#aviso');
let verificar = document.querySelector('#verificar');
let suma = 0;


verificar.addEventListener('click', contarStickers);


function contarStickers () {
    if (input1.value > 0 && input2.value > 0 && input3.value > 0) {
        suma = Number(input1.value) + Number(input2.value) + Number(input3.value);
        if (suma > 10) {
            aviso.innerHTML = 'Tienes demasiados adhesivos ' + '(' + suma + ')';
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = 'red';
            input1.value = '';
            input2.value = '';
            input3.value = '';
         
        } else {
            aviso.innerHTML = `Llevas un total de ${suma} adhesivos`;
            aviso.style.padding = '1%';
            aviso.style.backgroundColor = '##FF33CC	';
        }
    } else {
        aviso.innerHTML = 'Creo que hay un error en tus dígitos, llevas 10 o menos de 10 adhesivos?';
        aviso.style.padding = '1%';
        aviso.style.backgroundColor = 'yellow';
        aviso.style.color = 'black';
        input1.value = '';
        input2.value = '';
        input3.value = '';
        suma = 0;
    }
}



// Parte 3

let clave1 = document.querySelector('#clave1');
let clave2 = document.querySelector('#clave2');
let clave3 = document.querySelector('#clave3');
let ingresar = document.querySelector('#ingresar');
let mensaje = document.querySelector('#mensaje');



ingresar.addEventListener('click', () => {
    if (clave1.value == 9 && clave2.value == 1 && clave3.value == 1) {
        mensaje.innerHTML = 'Password 1 correcta';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#FF33CC	';
    } else if (clave1.value == 7 && clave2.value == 1 && clave3.value == 4) {
        mensaje.innerHTML = 'Password 2 correcta';
        mensaje.style.padding = '1%';
        mensaje.style.backgroundColor = '#FF33CC	';
    } else {
        mensaje.innerHTML = 'Password incorrecta';
        mensaje.style.backgroundColor = 'yellow';
        mensaje.style.color = 'black';
        mensaje.style.padding = '2%';
        mensaje.style.fontSize = '1.2rem';
    }
})